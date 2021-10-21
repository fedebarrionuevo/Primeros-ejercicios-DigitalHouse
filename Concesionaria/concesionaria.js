let autos = require('./autos');

let concesionaria = {
    autos: autos,

    buscarAuto: function (patente) {
        for (i = 0; i < autos.length; i++) {
            if (autos[i].patente == patente) {
                return autos[i];
            }
        }
        return null;
    },
    venderAuto: function (patente) {
        this.buscarAuto(patente);
        if (autos[i].vendido == false) {
            return (autos[i].vendido) = true;
        }
    },
    autosParaLaVenta: function () {
        let auto = this.autos;
        let paraVender = auto.filter(function (vender) {
            return vender.vendido == false;
        });
        return paraVender;
    },
    autosNuevos: function () {
        let ceroKm = this.autosParaLaVenta();
        let ceroKmEnVenta = ceroKm.filter(function (enVenta) {
            return enVenta.km < 100;
        });
        return ceroKmEnVenta;
    },
    listaDeVentas: function () {
        let listaAutos = this.autos.filter(function (lista) {
            return lista.vendido == true;
        });
        let listaPrecios = listaAutos.map(function (vendidos) {
            return vendidos.precio;
        });
        return listaPrecios;
    },
    totalDeVentas: function () {
        let listaAutos = this.autos.filter(function (lista) {
            return lista.vendido == true;
        });
        let listaPrecios = listaAutos.map(function (vendidos) {
            return vendidos.precio;
        });
        let sumaDeVentas = listaPrecios.reduce(function (acum, num) {
            return acum + num;
        }, 0);
        return sumaDeVentas;
    },
    puedeComprar: function (auto, persona) {
        let autosDisponibles = this.autosParaLaVenta();
        for (i = 0; i < autosDisponibles.length; i++) {
            if (persona.capacidadDePagoTotal >= autosDisponibles[i].precio &&
                persona.capacidadDePagoEnCuotas >= autosDisponibles[i].precio / autosDisponibles[i].cuotas) {
                return true;
            } else {
                return false;
            }
        }
    },
    autosQuePuedeComprar: function (persona) {
        let autosDisponibles = this.autosParaLaVenta();
        let autosFiltrados = autosDisponibles.filter(function (unAuto) {
            if (persona.capacidadDePagoTotal >= unAuto.precio &&
                persona.capacidadDePagoEnCuotas >= unAuto.precio / unAuto.cuotas) {
                return unAuto;
            }
        });
        return autosFiltrados;
    }
}
console.log(concesionaria.autosQuePuedeComprar());