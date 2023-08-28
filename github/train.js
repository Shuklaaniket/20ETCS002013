const axios = require("axios")


module.exports.getAlltrain = (req, res, next) => {
    try {
        // const currentTime = new Date()
        // const hours = currentTime.getHours()
        // const minutes = currentTime.getMinutes()
        const getToken = axios.post("http://20.244.56.144/train/auth", {
            "companyName": "Vinod system",
            "clientID": "7584c395-b067-4f94-b2b2-4fed89d4b90a",
            "ownerName": "Aniket shukla",
            "ownerEmail": "aniketshukla0788@gmail.com",
            "rollNo": "20ETCS002013",
            "clientSecret": "qcbbyaToaaLLczPe"
        })
        const token = getToken.access_token
        const headers = {
            'Authorization': 'Bearer ' + token,
            'CustomHeader': 'CustomValue'
        };
        const response = axios.get("http://20.244.56.144/train/trains/", {
            headers: headers
        })

        const now = new Date();

        const thirtyMinutesFromNow = new Date(now.getTime() + 30 * 60 * 1000);

        const twelveHoursFromNow = new Date(now.getTime() + 12 * 60 * 60 * 1000);

        const filteredTrains = trains.filter(train => {
            const adjustedDepartureTime = new Date(
                now.getFullYear(),
                now.getMonth(),
                now.getDate(),
                train.departureTime.Hours,
                train.departureTime.Minutes,
                train.departureTime.Seconds
            );

            adjustedDepartureTime.setMinutes(adjustedDepartureTime.getMinutes() + train.delayedBy);

            return (
                adjustedDepartureTime >= thirtyMinutesFromNow && adjustedDepartureTime <= twelveHoursFromNow
            );
        });

        // return res.json({ filteredTrains })
    }
    catch (e) {
        next(e)
    }
}

module.exports.gettrain = (req, res, next) => {
    try {
        const { trainNo } = req.body
        const getToken = axios.post("http://20.244.56.144/train/auth", {
            "companyName": "Vinod system",
            "clientID": "7584c395-b067-4f94-b2b2-4fed89d4b90a",
            "ownerName": "Aniket shukla",
            "ownerEmail": "aniketshukla0788@gmail.com",
            "rollNo": "20ETCS002013",
            "clientSecret": "qcbbyaToaaLLczPe"
        })
        const token = getToken.access_token
        const headers = {
            'Authorization': 'Bearer ' + token,
            'CustomHeader': 'CustomValue'
        };
        const response = axios.get("http://20.244.56.144/train/trains/" + trainNo, {
            headers: headers
        })
        return res.json({ response })
    }
    catch (e) {
        next(e)
    }
}