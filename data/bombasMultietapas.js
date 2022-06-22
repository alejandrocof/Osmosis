const bombasMultietapas =[
    {
        nombre: 'LOTUS50-4/1127',
        caudalNominal: '50',
        potenciNominalMotor: 0.75,
        ajuste: { a: -23.4732, b: 0.0144864, c: 96.2202 },
        //eficiencia: { Qmin: 35.0, Qmax: 72, p:0 },
        intervalo: { Qmin:0.0, Qmax: 67.0},
        imagen: {nombre:"bombaLOTUS5.svg", w:38, h:22, xetq:19, yetq:22, xin:0, yin:0, xout:0, yout:0}
    },
    {
        nombre: 'LOTUS50-5/1127',
        caudalNominal: '50',
        potenciNominalMotor: 1.00,
        ajuste: { a: -22.3621, b: 0.0171369, c: 113.033 },
        //eficiencia: { Qmin: 26, Qmax: 61, p:0 },
        intervalo: { Qmin:0.0, Qmax: 67.0},
        imagen: {nombre:"bombaLOTUS5.svg", w:38, h:22, xetq:19, yetq:22, xin:0, yin:0, xout:0, yout:0}
    },
    {
        nombre: 'LOTUS50-6/1127',
        caudalNominal: '50',
        potenciNominalMotor: 1.2,
        ajuste: { a: -22.5052, b: 0.0192337, c: 130.841 },
        //eficiencia: { Qmin: 20, Qmax: 66, p:0 },
        intervalo: { Qmin:0.0, Qmax: 67.0},
        imagen: {nombre:"bombaLOTUS5.svg", w:38, h:22, xetq:19, yetq:22, xin:0, yin:0, xout:0, yout:0}
    },
    {
        nombre: 'LOTUS100-3/1127',
        caudalNominal: '100',
        potenciNominalMotor: 1.0,
        ajuste: { a: -7.94182, b: 0.0135862, c: 68.2765 },
        //eficiencia: { Qmin: 20.59, Qmax: 60.35, p:0 },
        intervalo: { Qmin:0.0, Qmax: 130.0},
        imagen: {nombre:"bombaLOTUS5.svg", w:38, h:22, xetq:19, yetq:22, xin:0, yin:0, xout:0, yout:0}
    },
    {
        nombre: 'LOTUS100-4/1127',
        caudalNominal: '100',
        potenciNominalMotor: 1.2,
        ajuste: { a: -15.6275, b: 0.0106363, c: 92.1329 },
        //eficiencia: { Qmin: 18.12, Qmax: 76.68, p:0 },
        intervalo: { Qmin:0.0, Qmax: 130.0},
        imagen: {nombre:"bombaLOTUS5.svg", w:38, h:22, xetq:19, yetq:22, xin:0, yin:0, xout:0, yout:0}
    },
    {
        nombre: 'ALTAPRES20H05',
        caudalNominal: 20,
        potenciNominalMotor: 0.50,
        ajuste: { a: -14.9847, b: 0.064254, c: 172.375 },
        eficiencia: { Qmin: 11.3562, Qmax: 26.4978, p:116 },
        imagen: {nombre:"bombaALTAPRES.svg", w:53, h:22, xetq:26, yetq:22, xin:0, yin:0, xout:0, yout:0}
    },
    {
        nombre: 'ALTAPRES20H10',
        caudalNominal: 20,
        potenciNominalMotor: 1.00,
        ajuste: { a: -23.4854, b: 0.066044, c: 288.337 },
        eficiencia: { Qmin: 11.3562, Qmax: 26.4978, p:202 },
        imagen: {nombre:"bombaALTAPRES.svg", w:53, h:22, xetq:26, yetq:22, xin:0, yin:0, xout:0, yout:0}
    },
    {
        nombre: 'ALTAPRES30H05',
        caudalNominal: 30,
        potenciNominalMotor: 0.50,
        ajuste: { a: -21.0959, b: 0.0441715, c: 166.568 },
        eficiencia: { Qmin: 18.927, Qmax: 34.0686, p:87 },
        imagen: {nombre:"bombaALTAPRES.svg", w:53, h:22, xetq:26, yetq:22, xin:0, yin:0, xout:0, yout:0}
    },
    {
        nombre: 'ALTAPRES30H07',
        caudalNominal: 30,
        potenciNominalMotor: 0.75,
        ajuste: { a: -23.2759, b: 0.0475825, c: 205.169 },
        eficiencia: { Qmin: 18.927, Qmax: 34.0686, p:108 },
        imagen: {nombre:"bombaALTAPRES.svg", w:53, h:22, xetq:26, yetq:22, xin:0, yin:0, xout:0, yout:0}
    },
    {
        nombre: 'ALTAPRES30H10',
        caudalNominal: 30,
        potenciNominalMotor: 1.00,
        ajuste: { a: -31.4341, b: 0.0476835, c: 288.251 },
        eficiencia: { Qmin: 18.927, Qmax: 34.0686, p:156 },
        imagen: {nombre:"bombaALTAPRES.svg", w:53, h:22, xetq:26, yetq:22, xin:0, yin:0, xout:0, yout:0}
    },
    {
        nombre: 'ALTAPRES30H15',
        caudalNominal: 30,
        potenciNominalMotor: 1.50,
        ajuste: { a: -40.8688, b: 0.0493938, c: 380.489 },
        eficiencia: { Qmin: 18.927, Qmax: 34.0686, p:199 },
        imagen: {nombre:"bombaALTAPRES.svg", w:53, h:22, xetq:26, yetq:22, xin:0, yin:0, xout:0, yout:0}
    },
    {
        nombre: 'ALTAPRES40H05',
        caudalNominal: 40,
        potenciNominalMotor: 0.50,
        ajuste: { a: -24.4352, b: 0.0280529, c: 150.672 },
        eficiencia: { Qmin: 22.7124, Qmax: 49.2102, p:72 },
        imagen: {nombre:"bombaALTAPRES.svg", w:53, h:22, xetq:26, yetq:22, xin:0, yin:0, xout:0, yout:0}
    },
    {
        nombre: 'ALTAPRES40H07',
        caudalNominal: 40,
        potenciNominalMotor: 0.75,
        ajuste: { a: -18.7331, b: 0.0343507, c: 163.579 },
        eficiencia: { Qmin: 22.7124, Qmax: 49.2102, p:88 },
        imagen: {nombre:"bombaALTAPRES.svg", w:53, h:22, xetq:26, yetq:22, xin:0, yin:0, xout:0, yout:0}
    },
    {
        nombre: 'ALTAPRES40H10',
        caudalNominal: 40,
        potenciNominalMotor: 1.00,
        ajuste: { a: -32.8227, b: 0.0302522, c: 234.542 },
        eficiencia: { Qmin: 22.7124, Qmax: 49.2102, p:125 },
        imagen: {nombre:"bombaALTAPRES.svg", w:53, h:22, xetq:26, yetq:22, xin:0, yin:0, xout:0, yout:0}
    },
    {
        nombre: 'ALTAPRES40H15',
        caudalNominal: 40,
        potenciNominalMotor: 1.50,
        ajuste: { a: -40.7292, b: 0.0323904, c: 309.723 },
        eficiencia: { Qmin: 22.7124, Qmax: 49.2102, p:159 },
        imagen: {nombre:"bombaALTAPRES.svg", w:53, h:22, xetq:26, yetq:22, xin:0, yin:0, xout:0, yout:0}
    },
    {
        nombre: 'ALTAPRES40H20',
        caudalNominal: 40,
        potenciNominalMotor: 2.00,
        ajuste: { a: -53.4983, b: 0.0307074, c: 378.685 },
        eficiencia: { Qmin: 22.7124, Qmax: 49.2102, p:196 },
        imagen: {nombre:"bombaALTAPRES.svg", w:53, h:22, xetq:26, yetq:22, xin:0, yin:0, xout:0, yout:0}
    },
    {
        nombre: 'ALTAPRES60H10',
        caudalNominal: 60,
        potenciNominalMotor: 1.00,
        ajuste: { a: -21.2531, b: 0.0230854, c:171.844 },
        eficiencia: { Qmin: 30.2832, Qmax: 68.1372, p:85 },
        imagen: {nombre:"bombaALTAPRES.svg", w:53, h:22, xetq:26, yetq:22, xin:0, yin:0, xout:0, yout:0}
    },
    {
        nombre: 'ALTAPRES60H15',
        caudalNominal: 60,
        potenciNominalMotor: 1.50,
        ajuste: { a: -31.9405, b: 0.0233921, c: 252.937 },
        eficiencia: { Qmin: 30.2832, Qmax: 68.1372, p:121 },
        imagen: {nombre:"bombaALTAPRES.svg", w:53, h:22, xetq:26, yetq:22, xin:0, yin:0, xout:0, yout:0}
    },
    {
        nombre: 'ALTAPRES60H20',
        caudalNominal: 60,
        potenciNominalMotor: 2.00,
        ajuste: { a: -39.0034, b: 0.0236461, c: 316.237 },
        eficiencia: { Qmin: 30.2832, Qmax: 68.1372, p:153 },
        imagen: {nombre:"bombaALTAPRES.svg", w:53, h:22, xetq:26, yetq:22, xin:0, yin:0, xout:0, yout:0}
    },
    {
        nombre: 'STA-RITE HP7C 1/2HP',
        caudalNominal: "7GPM",
        potenciNominalMotor: 0.5,
        ajuste: { a: -21.9358, b: 0.043986, c: 168.136 },
        //eficiencia: { Qmin: 10.0, Qmax: 40.0 },
        imagen: {nombre:"bombaALTAPRES.svg", w:53, h:22, xetq:26, yetq:22, xin:0, yin:0, xout:0, yout:0}
    },
    {
        nombre: 'STA-RITE HP7D 3/4HP',
        caudalNominal: "7GPM",
        potenciNominalMotor: 0.75,
        ajuste: { a: -22.8825, b: 0.0468137, c: 214.743 },
        //eficiencia: { Qmin: 10.0, Qmax: 40.0 },
        imagen: {nombre:"bombaALTAPRES.svg", w:53, h:22, xetq:26, yetq:22, xin:0, yin:0, xout:0, yout:0}
    },
    {
        nombre: 'STA-RITE HP7E 1HP',
        caudalNominal: "7GPM",
        potenciNominalMotor: 1,
        ajuste: { a: -30.9759, b: 0.0464658, c: 285.394 },
        //eficiencia: { Qmin: 10.0, Qmax: 40.0 },
        imagen: {nombre:"bombaALTAPRES.svg", w:53, h:22, xetq:26, yetq:22, xin:0, yin:0, xout:0, yout:0}
    },
    {
        nombre: 'Franklin 10BT2S4-PE',
        caudalNominal: "10GPM",
        potenciNominalMotor: 2,
        ajuste: { a: -53.4743, b: 0.0305822, c: 378.667 },
        eficiencia: { Qmin: 3.7854, Qmax: 49.2102 },
        imagen: {nombre:"bombaALTAPRES.svg", w:53, h:22, xetq:26, yetq:22, xin:0, yin:0, xout:0, yout:0}
    },
    {
        nombre: 'SHIMGE BL2-5',
        caudalNominal: "GPM",
        potenciNominalMotor: 1.5,
        ajuste: { a: -18.2888, b: 0.02014, c: 112.725 },
        //eficiencia: { Qmin: 8, Qmax: 6 },
        imagen: {nombre:"bombaALTAPRES.svg", w:53, h:22, xetq:26, yetq:22, xin:0, yin:0, xout:0, yout:0}
    },

]
