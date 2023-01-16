export function getAllDogs() {
    // Your code here
    return fetch("/dogs");
}

export function getDogNumberTwo() {
    // Your code here
    return fetch("/dogs/2")
}

export function postNewDog() {
    // Your code here
    let url = "/dogs";
    let header = {"Content-Type": "application/x-www-form-urlencoded"};
    let body = new URLSearchParams({
        name: "Dexter",
        age: 11
})

    return fetch(url, {
        method: "POST",
        headers: header,
        body: body
    });
}

export function postNewDogV2(name, age) {
     // Your code here
     let url = "/dogs";
    let header = {"Content-Type": "application/x-www-form-urlencoded"};
    let body = new URLSearchParams({
        name: name,
        age: age
    })

    return fetch(url, {
        method: "POST",
        headers: header,
        body: body
    });
}

export function deleteDog(id) {
      // Your code here
      let url = `/dogs/${id}/delete`;
      let header = {AUTH: "ckyut5wau0000jyv5bsrud90y"}
      let body = "";

      return fetch(url, {
        method: "POST",
        headers: header,
        body: body
      })
}
