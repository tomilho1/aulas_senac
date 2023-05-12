///////////////////////////////////////////////////////////////////////////////////////////////////////
// Funções

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

// Coloca todas notas dentro de uma oitava.
function twelvefy(array_x) {
    for (step = 0; step < array_x.length; step++) {
        array_x[step] = array_x[step] % 12
    }
    return array_x
}

// Formata o acorde, eliminando oitavas e ordenando as notas.
function formatChord(array_x) {
    let array_b = []
    array_x = twelvefy(array_x)
    for (step = 0; step < 12; step++) {
        if ((array_x.includes(step)) === true) {
            array_b.push(step)
        }
        else { }
    }
    return zeroNote(array_b)
}

// Transforma a primeira nota em zero.
function zeroNote(array_x) {
    let id_1 = array_x[0]
    let array_b = array_x
    for (step = 0; step < array_b.length; step++) {
        array_b[step] = array_b[step] - id_1
    }
    return array_b
}

// Inverte acordes, tornando a nota de index "bass" a nota do baixo.
function invertChord(array_x, bass) {
    for (step = 0; step < array_x.length; step++) {
        if (step !== bass) {
            array_x[step] = array_x[step] + 12
        }
        else { }
    }
    const decrease = array_x[bass]
    for (step = 0; step < array_x.length; step++) {
        array_x[step] = array_x[step] - decrease
    }
    return formatChord(array_x)
}

///////////////////////////////////////////////////////////////////////////////////////////////////////
// Biblioteca

let chordnames =
    ["maj", "min", "dim", "aug",
        "maj7", "min7", "sus4", "sus2", "lyd",
        "maj9", "min9", "maj(add9)", "min(add9)",
        "7", "9", "7(b9)", "7sus4", "maj7sus4",
        "dim7", "min7(b5)", "dim(maj7)", "dim(b6)", "min(maj7)"]

let chordlibrary =
    [[0, 4, 7], [0, 3, 7], [0, 3, 6], [0, 4, 8],
    [0, 4, 7, 11], [0, 3, 7, 10], [0, 5, 7], [0, 2, 7], [0, 4, 6, 7],
    [0, 2, 4, 7, 11], [0, 2, 3, 7, 10], [0, 2, 4, 7], [0, 2, 3, 7],
    [0, 4, 7, 10], [0, 2, 4, 7, 10], [0, 1, 4, 7, 10], [0, 5, 7, 10], [0, 5, 7, 11],
    [0, 3, 6, 9], [0, 3, 6, 10], [0, 3, 6, 11], [0, 3, 6, 8], [0, 3, 7, 11]]

let sharp_notes = ["C", "C#", "D", "D#", "E", "F", "F#", "G", "G#", "A", "A#", "B"]
let flat_notes = ["C", "Db", "D", "Eb", "E", "F", "Gb", "G", "Ab", "A", "Bb", "B"]

///////////////////////////////////////////////////////////////////////////////////////////////////////
// Definições

let user_chord = [0, 7, 11, 15]

let sys_chord = {}
sys_chord.values = formatChord(user_chord)
sys_chord.intervals = function intervals() { return getIntervals(sys_chord.values) }
sys_chord.index = function index() { return librarySearch(sys_chord.values, chordlibrary) }
sys_chord.quality = function quality() { return chordnames[sys_chord.index()] }

///////////////////////////////////////////////////////////////////////////////////////////////////////
// Logs

for (i = 0; i < sys_chord.values.length; i++) {
    if (sys_chord.index() !== null) { i = i + 999999, logs() }
    else { sys_chord.values = invertChord(sys_chord.values, 1) }
}

if (sys_chord.index() === null) {
    console.log("Não foi possível identificar o acorde.")
}
else { }

function logs() {
    console.log("Acorde de entrada:", user_chord)
    console.log("Acorde formatado:", sys_chord.values)
    console.log("Intervalos do acorde:", sys_chord.intervals())
    console.log("Index do acorde:", sys_chord.index())
    console.log("Qualidade do acorde:", sys_chord.quality())
}   