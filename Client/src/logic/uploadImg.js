const API_URL = import.meta.env.VITE_ENDPOINT

export async function uploadImage (imgURl) {
  try {
    const response = await fetch(API_URL, {
      method: 'POST',
      credentials: 'include',
      mode: 'cors',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(imgURl)
    })

    if (!response.ok) {
      throw new Error('Error al subir imagen')
    }

    const data = await response.json()
    console.log(data)
    return data
  } catch (error) {
    throw new Error(error.message)
  } finally {
    console.log('carga terminada')
  }
}
