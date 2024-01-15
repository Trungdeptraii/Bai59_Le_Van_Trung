const getError = (errors)=>{
    if(errors?.length){
        return errors[0]
    }
}
const getData = (data)=>{
    if(data?.length){
        return data[0]
    }
}
const handleError = (req, res, next)=>{
 const error = req.flash("errors");
 const data = req.flash('dataOld')
 req.error = getError(error);
 req.data = getData(data)
 next()
}
module.exports = handleError