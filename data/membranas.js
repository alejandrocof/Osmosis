const membranas =[
    {
        nombre: 'Hydranautics ESPA1-4040',
        marca:'Hydranautics',
        flujoPermeado: 2600,//GPD
        rechazoSal: { nominal:99.3, min:99.0},
        test: {TDS: 1500, temperatura: 25, presion: 150},
        imagen: {nombre:"PortaMembrana4040.svg", w:12, h:105, xetq:6, yetq:52, xin:0, yin:0, xout:0, yout:0}
    },
    {
        nombre: 'Hydranautics ESPA1-LD-4040',
        marca:'Hydranautics',
        flujoPermeado: 2450,//GPD
        rechazoSal: { nominal:99.3, min:99.0},
        test: {TDS: 1500, temperatura: 25, presion: 150},
        imagen: {nombre:"PortaMembrana4040.svg", w:12, h:105, xetq:6, yetq:52, xin:0, yin:0, xout:0, yout:0}
    },
    {
        nombre: 'Hydranautics ESPA2-4040',
        marca:'Hydranautics',
        flujoPermeado: 1900,
        rechazoSal: { nominal:99.6, min:99.4},
        test: {TDS: 1500, temperatura: 25, presion: 150},
        imagen: {nombre:"PortaMembrana4040.svg", w:12, h:105, xetq:6, yetq:52, xin:0, yin:0, xout:0, yout:0}
    },
    {
        nombre: 'Hydranautics ESPA2-LD-4040',
        marca:'Hydranautics',
        flujoPermeado: 2000,
        rechazoSal: { nominal:99.6, min:99.4},
        test: {TDS: 1500, temperatura: 25, presion: 150},
        imagen: {nombre:"PortaMembrana4040.svg", w:12, h:105, xetq:6, yetq:52, xin:0, yin:0, xout:0, yout:0}
    },
    {
        nombre: 'Keensen XLP-4040',
        marca:'Keensen',
        flujoPermeado: 2600,
        rechazoSal: { nominal:99.2, min:99.0},
        test: {TDS: 500, temperatura: 25, presion: 100},
        imagen: {nombre:"PortaMembrana4040.svg", w:12, h:105, xetq:6, yetq:52, xin:0, yin:0, xout:0, yout:0}
    },
    {
        nombre: 'Keensen ULP-4040-2',
        marca:'Keensen',
        flujoPermeado: 2200,
        rechazoSal: { nominal:99.5, min:99.3},
        test: {TDS: 1500, temperatura: 25, presion: 150},
        imagen: {nombre:"PortaMembrana4040.svg", w:12, h:105, xetq:6, yetq:52, xin:0, yin:0, xout:0, yout:0}
    },
    {
        nombre: 'Keensen ULP-4040HF',
        marca:'Keensen',
        flujoPermeado: 2700,
        rechazoSal: { nominal:99.5, min:99.4},
        test: {TDS: 1500, temperatura: 25, presion: 150},
        imagen: {nombre:"PortaMembrana4040.svg", w:12, h:105, xetq:6, yetq:52, xin:0, yin:0, xout:0, yout:0}
    },
    {
        nombre: 'Keensen BW-4040',
        marca:'Keensen',
        flujoPermeado: 2500,
        rechazoSal: { nominal:99.60, min:99.50},
        test: {TDS: 2000, temperatura: 25, presion: 225},
        imagen: {nombre:"PortaMembrana4040.svg", w:12, h:105, xetq:6, yetq:52, xin:0, yin:0, xout:0, yout:0}
    },
    {
        nombre: 'Hydron HLE-4040',
        marca:'Hydron',
        flujoPermeado: 2800,
        rechazoSal: { nominal:98.0 },
        test: {TDS: 500, temperatura: 25, presion: 100},
        imagen: {nombre:"PortaMembrana4040.svg", w:12, h:105, xetq:6, yetq:52, xin:0, yin:0, xout:0, yout:0}
    },
    {
        nombre: 'Hydron BW-4040',
        marca:'Hydron',
        flujoPermeado: 2400,
        rechazoSal: { nominal:99.0 },
        test: {TDS: 1500, temperatura: 25, presion: 150},
        imagen: {nombre:"PortaMembrana4040.svg", w:12, h:105, xetq:6, yetq:52, xin:0, yin:0, xout:0, yout:0}
    },
    {
        nombre: 'PURIKOR PKM-4040LP',
        marca:'PURIKOR',
        flujoPermeado: 2600,
        rechazoSal: { nominal:99.5, min:99.2 },
        test: {TDS: 2000, temperatura: 25, presion: 225},
        imagen: {nombre:"PortaMembrana4040.svg", w:12, h:105, xetq:6, yetq:52, xin:0, yin:0, xout:0, yout:0}
    },
    {
        nombre: 'PURIKOR PKM-4040ULP',
        marca:'PURIKOR',
        flujoPermeado: 2600,
        rechazoSal: { nominal:99.2, min:99.0 },
        test: {TDS: 1500, temperatura: 25, presion: 150},
        imagen: {nombre:"PortaMembrana4040.svg", w:12, h:105, xetq:6, yetq:52, xin:0, yin:0, xout:0, yout:0}
    },
    {
        nombre: 'PURIKOR PKRO-4040LP',
        marca:'PURIKOR',
        flujoPermeado: 2400,
        rechazoSal: { nominal:99.6, min:99.5 },
        test: {TDS: 2000, temperatura: 25, presion: 225},
        imagen: {nombre:"PortaMembrana4040.svg", w:12, h:105, xetq:6, yetq:52, xin:0, yin:0, xout:0, yout:0}
    },
    {
        nombre: 'PURIKOR PKRO-4040ULP',
        marca:'PURIKOR',
        flujoPermeado: 2600,
        rechazoSal: { nominal:99.3, min:99.0 },
        test: {TDS: 1500, temperatura: 25, presion: 150},
        imagen: {nombre:"PortaMembrana4040.svg", w:12, h:105, xetq:6, yetq:52, xin:0, yin:0, xout:0, yout:0}
    },
    // {
    //     nombre: 'PURIKOR PKRO-4040SW',
    //     marca:'PURIKOR',
    //     flujoPermeado: 1800,
    //     rechazoSal: { nominal:99.7, min:99.6 },
    //     test: {TDS: 32000, temperatura: 25, presion: 800},
    //     imagen: {nombre:"PortaMembrana4040.svg", w:12, h:105, xin:0, yin:0, xout:0, yout:0}
    // },
    {
        nombre: 'GE AK4040FM',
        marca:'GE Osmonics Desal',
        flujoPermeado: 2200,
        rechazoSal: { nominal:99.0, min:98.0 },
        test: {TDS: 500, temperatura: 25, presion: 115},
        imagen: {nombre:"PortaMembrana4040.svg", w:12, h:105, xetq:6, yetq:52, xin:0, yin:0, xout:0, yout:0}
    },

    {
        nombre: 'TORAY TM710D',
        marca:'TORAY',
        flujoPermeado: 2600,
        caudalMinPermeado: 2150, //gpd
        rechazoSal: { nominal:99.8 },
        test: {TDS: 2000, temperatura: 25, presion: 225},
        imagen: {nombre:"PortaMembrana4040.svg", w:12, h:105, xetq:6, yetq:52, xin:0, yin:0, xout:0, yout:0}
    },

    {
        nombre: 'TORAY TM710',
        marca:'TORAY',
        flujoPermeado: 2400,
        caudalMinPermeado: 2000, //gpd
        rechazoSal: { nominal:99.7 },
        test: {TDS: 2000, temperatura: 25, presion: 225},
        imagen: {nombre:"PortaMembrana4040.svg", w:12, h:105, xetq:6, yetq:52, xin:0, yin:0, xout:0, yout:0}
    },
    {
        nombre: 'TORAY TMG10D',
        marca:'TORAY',
        flujoPermeado: 2850,
        caudalMinPermeado: 2400, //gpd
        rechazoSal: { nominal:99.7, min:99.5 },
        test: {TDS: 2000, temperatura: 25, presion: 150},
        imagen: {nombre:"PortaMembrana4040.svg", w:12, h:105, xetq:6, yetq:52, xin:0, yin:0, xout:0, yout:0}
    },
    {
        nombre: 'TORAY TMG10',
        marca:'TORAY',
        flujoPermeado: 2400,
        caudalMinPermeado: 2000, //gpd
        rechazoSal: { nominal:99.5 },
        test: {TDS: 500, temperatura: 25, presion: 110},
        imagen: {nombre:"PortaMembrana4040.svg", w:12, h:105, xetq:6, yetq:52, xin:0, yin:0, xout:0, yout:0}
    },
    {
        nombre: 'TORAY TMH10A',
        marca:'TORAY',
        flujoPermeado: 2400,
        caudalMinPermeado: 1900, //gpd
        rechazoSal: { nominal:99.3 },
        test: {TDS: 500, temperatura: 25, presion: 100},
        imagen: {nombre:"PortaMembrana4040.svg", w:12, h:105, xetq:6, yetq:52, xin:0, yin:0, xout:0, yout:0}
    },
    {
        nombre: 'FILMTEC XLE-4040',
        marca:'DUPONT',
        flujoPermeado: 2600,
        rechazoSal: { nominal:99.0 },
        test: {TDS: 500, temperatura: 25, presion: 100},
        imagen: {nombre:"PortaMembrana4040.svg", w:12, h:105, xetq:6, yetq:52, xin:0, yin:0, xout:0, yout:0}
    },
    {
        nombre: 'FILMTEC LP-4040',
        marca:'DUPONT',
        flujoPermeado: 2900,
        rechazoSal: { nominal:99.2 },
        test: {TDS: 500, temperatura: 25, presion: 145},
        imagen: {nombre:"PortaMembrana4040.svg", w:12, h:105, xetq:6, yetq:52, xin:0, yin:0, xout:0, yout:0}
    },
    {
        nombre: 'FILMTEC TW30-4040',
        marca:'DUPONT',
        flujoPermeado: 2400,
        rechazoSal: { nominal:99.5 },
        test: {TDS: 2000, temperatura: 25, presion: 225},
        imagen: {nombre:"PortaMembrana4040.svg", w:12, h:105, xetq:6, yetq:52, xin:0, yin:0, xout:0, yout:0}
    },
    {
        nombre: 'LG BW 4040 R',
        marca:'LG Chem',
        flujoPermeado: 2500,
        rechazoSal: { nominal:99.6, min:99.3 },
        test: {TDS: 2000, temperatura: 25, presion: 225},
        imagen: {nombre:"PortaMembrana4040.svg", w:12, h:105, xetq:6, yetq:52, xin:0, yin:0, xout:0, yout:0}
    },
    {
        nombre: 'LG BW 4040 ES',
        marca:'LG Chem',
        flujoPermeado: 2500,
        rechazoSal: { nominal:99.5, min:99.2 },
        test: {TDS: 2000, temperatura: 25, presion: 150},
        imagen: {nombre:"PortaMembrana4040.svg", w:12, h:105, xetq:6, yetq:52, xin:0, yin:0, xout:0, yout:0}
    },
    {
        nombre: 'LG BW 4040 UES',
        marca:'LG Chem',
        flujoPermeado: 2700,
        rechazoSal: { nominal:99.0, min:98.0 },
        test: {TDS: 500, temperatura: 25, presion: 100},
        imagen: {nombre:"PortaMembrana4040.svg", w:12, h:105, xetq:6, yetq:52, xin:0, yin:0, xout:0, yout:0}
    },
    {
        nombre: 'LG CW 4040 SF',
        marca:'LG Chem',
        flujoPermeado: 2900,
        rechazoSal: { nominal:99.0, min:98.0 },
        test: {TDS: 500, temperatura: 25, presion: 100},
        imagen: {nombre:"PortaMembrana4040.svg", w:12, h:105, xetq:6, yetq:52, xin:0, yin:0, xout:0, yout:0}
    },
    {
        nombre: 'KOCH TFC 4040 ULP',
        marca:'KOCH',
        flujoPermeado: 1800,
        rechazoSal: { nominal:98.65 },
        test: {TDS: 2000, temperatura: 25, presion: 125},
        imagen: {nombre:"PortaMembrana4040.svg", w:12, h:105, xetq:6, yetq:52, xin:0, yin:0, xout:0, yout:0}
    },
    {
        nombre: 'KOCH TFC 4040 HR',
        marca:'KOCH',
        flujoPermeado: 2270,
        rechazoSal: { nominal:99.55 },
        test: {TDS: 2000, temperatura: 25, presion: 225},
        imagen: {nombre:"PortaMembrana4040.svg", w:12, h:105, xetq:6, yetq:52, xin:0, yin:0, xout:0, yout:0}
    },
    {
        nombre: 'KOCH TFC 4040 XR',
        marca:'KOCH',
        flujoPermeado: 2200,
        rechazoSal: { nominal:99.75 },
        test: {TDS: 2000, temperatura: 25, presion: 325},
        imagen: {nombre:"PortaMembrana4040.svg", w:12, h:105, xetq:6, yetq:52, xin:0, yin:0, xout:0, yout:0}
    },



    
]
