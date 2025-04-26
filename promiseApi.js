// Create promises
const p1 = new Promise((res, rej) => {
    setTimeout(() => {
      res("Promise 1 resolved");
    }, 2000);
  });
  
  const p2 = new Promise((res, rej) => {
    setTimeout(() => {
      rej("Promise 2 rejected");
    }, 3000);
  });
  
  const p3 = new Promise((res, rej) => {
    setTimeout(() => {
      res("Promise 3 resolved");
    }, 1000);
  });
  
  const p4 = new Promise((res, rej) => {
    setTimeout(() => {
      rej("Promise 4 rejected");
    }, 5000);
  });
  
  // Promise.all()
  // Waits for ALL promises to succeed.
  // If any one promise rejects, Promise.all immediately rejects with that error.

  Promise.all([p1, p2, p3, p4])
    .then((data) => {
      console.log("Console for Promise.all:");
      console.log(data);
    })
    .catch((err) => {
      console.log("Console for Promise.all:");
      console.log(err);
    });
  
  
  // Promise.race()
  // Returns the result of the first settled promise (fulfilled or rejected).

  Promise.race([p1, p2, p3, p4])
    .then((data) => {
      console.log("Console for Promise.race:");
      console.log(data);
    })
    .catch((err) => {
      console.log("Console for Promise.race:");
      console.log(err);
    });
  
  // Promise.any()
  // Returns the first fulfilled promise.
  // If all promises reject, Promise.any rejects with an AggregateError.

  Promise.any([p1, p2, p3, p4])
    .then((data) => {
      console.log("Console for Promise.any:");
      console.log(data);
    })
    .catch((err) => {
      console.log("Console for Promise.any:");
      console.log(err);
    });
  
  
  // Promise.allSettled()
  // Waits for all promises to settle (fulfilled or rejected).
  // Returns an array with the status and value/reason for each promise.

  Promise.allSettled([p1, p2, p3, p4])
    .then((data) => {
      console.log("Console for Promise.allSettled:");
      console.log(data);
    })
    .catch((err) => {
      console.log("Console for Promise.allSettled:");
      console.log(err);
    });
  