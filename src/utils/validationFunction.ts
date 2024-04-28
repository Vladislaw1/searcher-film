export const validationFunction = (value:string,pattern?: RegExp) => {
    if(!pattern) return null

    if(!pattern.test(String(value).toLowerCase()) && value !== '') {
        return 'Error text'
    }
    return null
}