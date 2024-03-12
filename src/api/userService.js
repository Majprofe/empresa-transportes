const API_BASE_URL = 'https://aao4-latest.onrender.com'

export const userLogin = async (email, password) => {
    try {
        const url = `https://aao4-latest.onrender.com/User/${email}/${password}`.toString()
        const response = await fetch(url)
        if (!response.ok) {
            throw new Error('Response was not ok')
        }
        return await response.json()
    } catch (error) {
        console.log(error)
    }
}

export const getCity = async () => {
    try {
        const url = `${API_BASE_URL}/City`
        const response = await fetch(url)
        if (!response.ok) {
            throw new Error('Failed to fetch city')
        }
        return await response.json()
    } catch (error) {
        console.log(error)
    }
}

export const getEntriesFiltered = async (vatNumber, choffer, client, travel) => {
    const url = `${API_BASE_URL}/Entry/GetEntriesFiltered`
    const datas = {
        "vatNumber": vatNumber,
        "choffer": choffer,
        "client": client,
        "travel": travel
    }
    try {
        const response = await fetch(url, {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(datas)
        })
        if (!response.ok) {
            throw new Error('Failed to fetch getEntriesFiltered')
        }
        return await response.json()
    } catch (error) {
        console.log(error)
    }
}

export const updateData = async (entry) => {
    const url = `${API_BASE_URL}/Entry/${entry.id}`
    const date = new Date(entry.date)
    const datas = {
        "vatNumber": entry.vatNumber,
        "choffer": entry.choffer,
        "client": entry.client,
        "travel": entry.travel,
        "import": entry.import,
        "iva": entry.iva,
        "date": date,
        "origin": entry.origin,
        "destination": entry.destination
    }
    console.log(datas)
    try {
        const response = await fetch(url, {
            method: 'PUT',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(datas)
        })
        if (!response.ok) {
            throw new Error('Failed to fetch getEntriesFiltered')
        }
        return await response.json()
    } catch (error) {
        console.log(error)
    }
}

export const deleteEntry = async (id) => {
    const url = `${API_BASE_URL}/Entry?id=${id}`
    try {
        const response = await fetch(url, {
            method: 'DELETE'
        })
        if (!response.ok) {
            throw new Error('Failed to delete entry')
        }
        return await response.json()
    } catch (error) {
        console.log(error)
    }
}