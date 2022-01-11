// function job() {
//     return new Promise(function(resolve, reject) {
//         reject();
//     });
// }

// let promise = job();

// promise

// .then(function() {
//     console.log('Success 1');
// })

// .then(function() {
//     console.log('Success 2');
// })

// .then(function() {
//     console.log('Success 3');
// })

// .catch(function() {
//     console.log('Error 1');
// })

// .then(function() {
//     console.log('Success 4');
// });

// // Output

// // Error 1
// // Success 4

// function job(state) {
//     return new Promise(function(resolve, reject) {
//         if (state) {
//             resolve('success');
//         } else {
//             reject('error');
//         }
//     });
// }

// let promise = job(true);

// promise

// .then(function(data) {
//     console.log(data);

//     return job(false);
// })

// .catch(function(error) {
//     console.log(error);

//     return 'Error caught';
// })

// .then(function(data) {
//     console.log(data);

//     return job(true);
// })

// .catch(function(error) {
//     console.log(error);
// });

// Output

// success, error, error-caught

function job(state) {
    return new Promise(function(resolve, reject) {
        if (state) {
            resolve('success');
        } else {
            reject('error');
        }
    });
}

let promise = job(true);

promise

.then(function(data) {
    console.log(1);
    console.log(data);

    return job(true);
})

.then(function(data) {
    console.log(2);
    if (data !== 'victory') {
        throw 'Defeat';
    }

    return job(true);
})

.then(function(data) {
    console.log(3);
    console.log(data);
})

.catch(function(error) {
    console.log(4);
    console.log(error);

    return job(false);
})

.then(function(data) {
    console.log(5);
    console.log(data);

    return job(true);
})

.catch(function(error) {
    console.log(6);
    console.log(error);

    return 'Error caught';
})

.then(function(data) {
    console.log(7);
    console.log(data);

    return new Error('test');
})

.then(function(data) {
    console.log(8);
    console.log('Success:', data.message);
})

.catch(function(data) {
    console.log(9);
    console.log('Error:', data.message);
});

// Output

// 1
// success
// 2
// 4
// Defeat
// 6
// error
// 7
// Error caught
// 8
// Success: test
