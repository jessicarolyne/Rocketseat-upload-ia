import { FastifyInstance } from "fastify";
import { z } from 'zod'
import { prisma } from "../lib/prisma";

export async function createTranscriptionRoute(app: FastifyInstance) {
  app.post('/videos/:videoID/transcription', async (request) => {
   const paramsSchema =  z.object({
    videoID: z.string().uuid()
   })
    const { videoID } = paramsSchema.parse(request.params)

    const bodySchema =  z.object({
      prompt: z.string()
    })

    const { prompt } = bodySchema.parse(request.body)
    return {
      videoID,
      prompt,
    }
  })
}