// DALL-E 3 / Stable Diffusion integration placeholder
export const generateImage = async (prompt: string): Promise<string> => {
  const response = await fetch('/api/images/generate', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      /* IMAGE_GEN_API_KEY */ 'Authorization': `Bearer ${import.meta.env.VITE_IMAGE_GEN_KEY}`
    },
    body: JSON.stringify({ prompt, model: 'dall-e-3' })
  });

  if (!response.ok) throw new Error('Image generation failed');

  const data = await response.json();
  return data.url;
};