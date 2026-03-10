// melakukan inisialisasi variabel count dengan nilai 0
let count = 0;

// membuat function untuk menampilkan nilai count
function updateCount() {
    document.getElementById("count").innerHTML = count;
}

// membuat function untuk menambah nilai count
function increaseCount() {
    count++;
    updateCount();
}

// membuat function untuk mengurangi nilai count
function decreaseCount() {
    count--;
    updateCount();
}

// membuat function untuk reset nilai count ke 0
function resetCount() {
    count = 0;
    updateCount();
}
