let deleteFromArr = (arr,index) => {
    let result = new Array(arr.length - 1)

    for(let i = 0; i < index; i++){
        result[i] = arr[i]
    }

    for(let i = index + 1; i < arr.length; i++){
        result[i - 1] = arr[i]
    }

    return result
}

export {
    deleteFromArr
}