// THE CALLBACK VERSION
const fakeRequestCallback = (url, success, failure) => {
    const delay = Math.floor(Math.random() * 4500) + 500;
    setTimeout(() => {
        if (delay > 4000) {
            failure('Connection Timeout :(')
        } else {
            success(`Here is your fake data from ${url}`)
        }
    }, delay)
}
// THE PROMISE VERSION 
const fakeRequestPromise = (url) => {
    return new Promise((resolve, reject) => {
        const delay = Math.floor(Math.random() * (4500)) + 500;
        setTimeout(() => {
            if (delay > 4000) {
                reject('Connection Timeout :(')
            } else {
                resolve(`Here is your fake data from ${url}`)
            }
        }, delay)
    })
}

// callback hell
// fakeRequestCallback('book.com/page1',
//     function (response) {
//         console.log('It Worked: ' + response);
//         fakeRequestCallback('book.com/page2',
//             function (response) {
//                 console.log('It Worked Again2: ' + response);
//                 fakeRequestCallback('book.com/page3',
//                     function (response) {
//                         console.log('It Worked Again3: ' + response);
//                     }, function (error) {
//                         console.log('Time Out 3rd req: ' + error);
//                     });
//             }, function (error) {
//                 console.log('Time Out 2nd req: ' + error);
//             });
//     }, function (error) {
//         console.log('Time Out: ' + error);
//     }
// )

// better than the previous one but still complicated to read
// fakeRequestPromise('www.donas.com/page1')
//     .then((response) => {
//         console.log('it worked 1 ' + response);
//         fakeRequestPromise('www.donas.com/page2')
//             .then((response) => {
//                 console.log('it worked 2 ' + response);
//                 fakeRequestPromise('www.donas.com/page3')
//                     .then((response) => {
//                         console.log('it worked 3 ' + response)
//                     })
//                     .catch((error) => {
//                         console.log(error + ' 3 did not work')
//                     })
//             })
//             .catch((error) => {
//                 console.log(error + ' 2 did not work')
//             })
//     })
//     .catch((error) => {
//         console.log(error + ' 1 did not work');
//     })

//more compact version 
// only needs 1 catch
fakeRequestPromise('finalUrl.com/page1')
    .then((response) => {
        console.log('It worked 1 ' + response)
        return fakeRequestPromise('finalURL.com/page2')
    })
    .then((response) => {
        console.log('It worked 2 ' + response)
        return fakeRequestPromise('finalURL.com/page3')
    })
    .then((response) => {
        console.log('It worked 3 ' + response)
    })
    .catch((error) => {
        console.log(error + ' A request failed')
    })