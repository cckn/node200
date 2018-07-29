const destination = ['런던', '파리', '로마', '암스테르담']

const searchDestination = '파리'

for (let i = 0; i < destination.length; i++) {
    if (searchDestination == destination[i]) {
        console.log(`${i + 1}번째 요소가 ${searchDestination} 입니다`)
        break;
    }
}

for (x of destination){
    if (searchDestination == x) {
        console.log(x)
        break;
    }
}