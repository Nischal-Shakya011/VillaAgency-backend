//custom middleware for making array of images even if only one image is passed
const arrayImage = (req, res, next) => {

    function changeRequest(field) {

        let temp = {};

        if (req[field]) {
            let temp_arr = Object.entries(req[field])

            temp_arr.forEach(el => {
                if (el[0].endsWith("[]")) {
                    temp[el[0].slice(0, -2)] = Array.isArray(el[1]) ? el[1] : [el[1]]
                } else {
                    temp[el[0]] = el[1]
                }
            })
        }

        req[field] = temp
    }

    changeRequest("body")
    changeRequest("files")

    next()

}
module.exports = 
{
    arrayImage 
}