export interface OAImageGenerationRequest {
  prompt: string
  size: string
  style: string
  quality: string
}

export interface OAImageGenerationResponse {
  base64String: string
  size: string
}

export interface SaveImageRequest {
  base64String: string
  userId: string
}

export interface SaveImageResponse {
  id: string
  createdAt: string
  base64String: string
  userId: string
  url: string
}
