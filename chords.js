// Calcula os intervalos do acorde.
function getIntervals(array_a) {
    array_b = []
    for (let step = 0; step < array_a.length - 1; step++) {
        array_b.push(array_a[step + 1] - array_a[step])
    }
    return array_b
}

// Compara o tamanho de duas arrays; true ou false.
function lengthCompare(array_x, array_y) {
    if (array_x.length === array_y.length)
        return true

    else return false
}

// Compara se duas arrays são idênticas; true ou false.
function arrayCompare(array_x, array_y) {
    let bool
    if (lengthCompare(array_x, array_y) === true) {
        for (let step = 0; step < array_x.length; step++) {
            if (array_x[step] === array_y[step]) {
                bool = true
            }
            else {
                step = step + 999999
                bool = false
            }
        }
    }

    else { bool = false }
    return bool
}

// Busca o acorde dentro da biblioteca e retornando o index do mesmo. Retorna null caso não encontre.
function librarySearch(array_x, bigarray) {
    let index
    for (step = 0; step < bigarray.length; step++) {
        if (arrayCompare(array_x, bigarray[step]) === true) {
            index = step
            step = step + 999999
        }
        else {
            index = null
        }
    }
    return index
}

////////////////////////////////////////////////////////////////////////////////////////////////

let my_chord = [0,4,7,11]
let intervals = getIntervals(my_chord) // [4,3,4]

let chordnames = ["major", "minor", "diminished", "augmented","major seventh"]
let chordlibrary = [[4, 3], [3, 4], [3, 3], [4, 4], [4,3,4]]

console.log(librarySearch(intervals, chordlibrary))
console.log(chordnames[librarySearch(intervals, chordlibrary)])




