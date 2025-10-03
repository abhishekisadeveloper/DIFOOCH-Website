const UsePostApiRequest = async ({phone = '', otp = ''}) => {
    const [error, setError] = useState(null);

    const url = 'https://difooch-backend.onrender.com'
    const userData = {
        "phone": phone,
        "otp": otp
    }

    try {
        const response = await fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                userData
            })
        })
    } catch (error) {
        setError(`API fetching Error: ${error.message}`)
    }

}

export default UsePostApiRequest
