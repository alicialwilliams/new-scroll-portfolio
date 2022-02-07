const router = require('express').Router()
const nodemailer = require('nodemailer')

router.post('/contact', (req, res) => {
    let data = req.body
    if (data.name.length === 0 || data.email.length === 0 || data.message.length === 0) {
        return res.json({ msg: "please fill all fields" })
    }

    let smtpTransporter = nodemailer.createTransport({
        service: 'Gmail',
        port: 465,
        auth: {
            user: 'alicialwilliamsnyc@gmail.com',
            password: 'Dun8YHwH7AAbb'
        }
    })
    let mmailOptions = {
        from: data.email,
        to: 'alicialwilliamsnyc@gmail.com',
        subject: `message from $(data.name)`,
        html: `
            
            <h3>Informations</h3>
            <ul>
            <li>Name: ${data.name}</li>
            <li>Name: ${data.email}</li>
            </ul>
            <h3>Message</h3>
            <p>${data.message}</p>
            `
    }
    smtpTransporter.sendMail(mailOptions, (error) => {
        try {
            if (error) return res.status(400).json({ msg: "Please Fill all Fields!" })
            res.status(200).json({ msg: "Message Sent!  I will contact you soon!" })
        } catch (error) {
            if (error) return res.status(500).json({ msg: "Server Error!" })
        }
    })

})
module.exports = router;