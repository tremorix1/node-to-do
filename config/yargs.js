const dc = {
    descripcion: {
        demand: true,
        alias: 'd',
        desc: 'Descripcion de la tarea por hacer'
    }
}
const ct = {
    completado: {
        default: true,
        alias: 'c',
        desc: 'Marca como compleatado o pendiente la tarea'
    }
}
const opts = {dc, ct}
const argv = require('yargs')
.command('crear','Crea un elemento por hacer', dc )
.command('actualizar','Actualiza el estado completado de una tarea',
{descripcion:dc['descripcion'],completado:ct['completado']})
.command('borrar', 'Borra una tarea',dc)
.help()
.argv;

module.exports = {
    argv
}
