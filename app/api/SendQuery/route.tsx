import { createClient } from '@supabase/supabase-js'
import { Ratelimit } from "@upstash/ratelimit";
import { Redis } from "@upstash/redis";
import emailjs from '@emailjs/browser';

const redis = Redis.fromEnv()

const ratelimit = new Ratelimit({
    redis: redis,
    limiter: Ratelimit.slidingWindow(10, "86400 s"),
    timeout: 86400000,
    analytics: true
})

export async function POST(request: Request) {

    const req = await request.json()

    const ip = request.headers.get("x-forwarded-for")?.split(",")[0]?.trim()
        ?? request.headers.get("x-real-ip")
        ?? "unknown"

    console.log('ip', ip)

    const identifier = ip
    const { success, pending, limit, reset, remaining } = await ratelimit.limit(identifier);

    if (success) {

        const supabaseUrl = process.env.SUPABASE_URL
        const supabaseServiceKey = process.env.SUPABASE_SERVICE_KEY

        const supabase = createClient(supabaseUrl!, supabaseServiceKey!)

        const { error } = await supabase
            .from("clients")
            .insert({ name: req.clientName, email: req.clientEmail, message: req.clientMsg });

        if (error) {
            console.log(error)
            return (Response.json({ message: error }))
        }
        else {
            emailjs.send(process.env.EMAILJS_SID!, process.env.EMAILJS_TID!)
            return (Response.json('Query received'))
        }
    }

    else return (Response.json('IP was rate limited.'))

}