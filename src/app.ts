//Bài 1
type Admin = {
    name: string;
    privileges: string[];
};

type Emloyee = {
    name: string;
    startDate: Date;
};

// type ElevatedEmployee = Admin & Emloyee;

// const elevatedEmployee: ElevatedEmployee = {
//     name: "Nguyên",
//     startDate: new Date(),
//     privileges: ["create", "edit", "delete"],
// };

// console.log(elevatedEmployee);

//Bài 2
class Car {
    drive() {
        console.log('Driving..');
    }
}

class Truck {
    drive() {
        console.log('Driving a truck..');
    }
    loadCargo(amount: number) {
        console.log('Loading cargo...' + amount);
    }
}

type Vehicle = Car | Truck;

const v1 = new Car();
const v2 = new Truck();

function useVehicle(vehicle: Vehicle) {
    vehicle.drive();
    if (vehicle instanceof Truck) {
        vehicle.loadCargo(1000);
    }
}

// useVehicle(v1);
// useVehicle(v2);

//Bài 3
interface Bird {
    type: 'bird';
    flyingSpeed: number;
}

interface Horse {
    type: 'horse';
    runningSpeed: number;
}

type Animal = Bird | Horse;

function moveAnimal(animal: Animal) {
    let speed;
    switch (animal.type) {
        case 'bird':
            speed = animal.flyingSpeed;
            break;
        case 'horse':
            speed = animal.runningSpeed;
    }
    console.log('Moving at speed: ' + speed);

}

// const bird: Bird = {
//     type: 'bird',
//     flyingSpeed: 25
// };

// moveAnimal(bird);

// const horse: Horse = {
//     type: 'horse',
//     runningSpeed: 20
// };

// moveAnimal(horse);

//Bài 4
function merge<T extends object, U extends object>(objA: T, objB: U) {
    return Object.assign(objA, objB);
}

const mergedObj = merge({ name: 'Max', hobbies: ['Sports'] }, { age: 30 });
console.log(mergedObj);


interface Lengthy {
    length: number;
}

function countAndDescribe<T extends Lengthy>(element: T): [T, string] {
    let descriptionText = 'Got no value.';
    if (element.length === 1) {
        descriptionText = 'Got 1 element.'
    } else if (element.length > 1) {
        descriptionText = 'Got' + element.length + 'elements'
    }
    return [element, descriptionText];
}

class DataStorage<T extends string | number | boolean> {
    private data: T[] = [];

    addItem(item: T) {
        this.data.push(item);
    }

    removeItem(item: T) {
        if (this.data.indexOf(item) === -1) {
            return;
        }
        this.data.splice(this.data.indexOf(item), 1)
    }

    getItem() {
        return [...this.data]
    }
}

const textStorage = new DataStorage<string>()
textStorage.addItem('Max');
textStorage.addItem('Manu');
textStorage.removeItem("Max");
console.log(textStorage.getItem());

const numberStorage = new DataStorage<number>();



// Tạo form đăng nhập
const loginForm = document.createElement('form');
loginForm.classList.add('p-3','text-center');

// Tạo tiêu đề
const title = document.createElement('h2');
title.classList.add('mb-4');
title.textContent = 'Đăng nhập';
loginForm.appendChild(title);

// Tạo khung nhập username
const usernameInput = document.createElement('input');
usernameInput.type = 'text';
usernameInput.classList.add('form-control', 'mb-3');
usernameInput.placeholder = 'Nhập tên đăng nhập';
loginForm.appendChild(usernameInput);

// Tạo nút đăng nhập
const loginButton = document.createElement('button');
loginButton.textContent = 'Đăng nhập';
loginButton.classList.add('btn', 'btn-primary');
loginForm.appendChild(loginButton);

// Gắn form vào phần tử có id="login"
const loginContainer = document.getElementById('login');
if (loginContainer) {
  loginContainer.appendChild(loginForm);
}