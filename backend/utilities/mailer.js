import nodemailer from "nodemailer"

const sendMail = async (email, firstName) => {
    const messageTemplate = `
        <div>
            <h2>Welcome message</h2>
            <ul>
                <li>Name: ${firstName}</li>
                <li>Email: ${email}</li>
            </ul>
            <div>
                <p>Dear ${firstName}, </p>
                <p>Welcome to our app, we hope you enjoy it here. Sincerely, the APP team.</p>
            </div>
        </div>
    `

    const transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
            user: "ogunbaja24@gmail.com",
            pass: "hdzhyvuwlcitppxe"
        }
    })

    const mailOptions = {
        from: "ogunbaja24@gmail.com",
        to: email,
        subject:"Registration message",
        text: "Test App",
        html: messageTemplate
    }

    try {
        await transporter.sendMail(mailOptions)
        console.log("Mail sent successfully");
    } catch (error) {
        throw{
            name:"MailerError",
            message: `Error sending mail: ${error}`
        }
    }
}


const forgotPasswordMail = async (email, firstName, OTP) => {
    const messageTemplate = `
        <div>
            <h2>Welcome message</h2>
            <ul>
                <li>Name: ${firstName}</li>
                <li>Email: ${email}</li>
            </ul>
            <div>
                <p>Dear ${firstName}, </p>
                <p>Kindly use this code ${OTP} to reset your password</p>
            </div>
        </div>
    `

    const transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
            user: "ogunbaja24@gmail.com",
            pass: "hdzhyvuwlcitppxe"
        }
    })

    const mailOptions = {
        from: "ogunbaja24@gmail.com",
        to: email,
        subject:"Registration message",
        text: "Test App",
        html: messageTemplate
    }

    try {
        await transporter.sendMail(mailOptions)
        console.log("Mail sent successfully");
    } catch (error) {
        throw{
            name:"MailerError",
            message: `Error sending mail: ${error}`
        }
    }
}

export {sendMail, forgotPasswordMail}