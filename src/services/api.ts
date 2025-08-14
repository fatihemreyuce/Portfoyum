const BSE_URL = "https://example.com/api"
export async function apiGet<T>(path:string):Promise<T>{
    const res= await fetch(`${BSE_URL}/${path}`)
    if(!res.ok){
        const msg = await res.text().catch(() => res.statusText)
        throw new Error(msg || "API error")
    }
    return res.json() as Promise<T>
}