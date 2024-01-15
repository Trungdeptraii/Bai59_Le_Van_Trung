const {object,string} = require("yup");
const moment = require("moment");

const sendMail = require('../utils/sendMail.js');
const models = require('../models/index');
const Email = models.Email;


module.exports = {
    index: (req, res)=>{
        console.log(req.error);
       res.render("mail/index", {req})
    },
    getLists:async (req, res)=>{
        const email = await Email.findAll();
        res.render("mail/lists", {email, moment})
    },
    send: async (req, res) => {
        try {
            const schema = object({
                email: string().required('Vui lòng nhập email')
                .email('Chưa đúng định dạng email'),
                title: string().required('Vui lòng nhập tiêu đề'),
                content: string().required('Vui lòng nhập nội dung Email')
            })
            await schema.validate(req.body,{abortEarly: false})
            const result = await sendMail({to: req.body.email, subject: req.body.title, message: req.body.content});
            if(result.response.includes('OK')){
                await Email.create(
                    {
                        email: req.body.email, 
                        title: req.body.title,
                        content: req.body.content
                    })
            }
            res.redirect('/')
        } catch (e) {
            console.log(e);
            const errors = Object.fromEntries(
                e.inner.map((item)=>[
                    item.path, item.message
                ])
            );
            req.flash("errors", errors)
            req.flash("dataold", req.body)
            res.redirect('/')
        }
    }
}