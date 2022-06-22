// import { suavizadores } from "./data/suavizadores";
// import {bombasMultietapas} from "./data/bombasMultietapas";


const canvas = document.querySelector( '#canvas' );
const canvasSVG = document.querySelector( '#canvasSVG' );

//const imgBombaMultietapas = document.querySelector( '#svg' );



class createCanvas{

    updateImage(){
        //this.imgSVG.setAttribute('href', this.obj.selected.imagen.nombre );
        //this.imgSVG.setAttribute('href', img );
        //console.log("updateImage()",this.imgSVG,this.prueba);
        //console.log("updateImage()",this.imgSVG);
        //console.log("updateImage()",this.prueba2);
        
        //console.log(this.obj.selected.imagen.nombre);
        //this.imgSVG.setAttribute('href', "./icono.png");

        const {xetq,yetq}=this.obj.selected.imagen;
        
        this.imgSVG.setAttribute('href', this.obj.selected.imagen.nombre );
        //this.obj.dom.setAttribute('style', `position:absolute; left:${(this.x+xetq)/3}%; top:${(this.y+yetq)/2}%;  transform: translate(-50%, 0%); border:2px solid green; >` );
        this.obj.dom.setAttribute('style', `position:absolute; left:${(this.x+xetq)/3}%; top:${(this.y+yetq)/2}%;  transform: translate(-50%, 0%);>` );
        //canvasSVG.child(this.imgSVG);
        //console.log("Hola");
     }
 
     datos(){
         //console.log(this.imgSVG);
         //console.log(this.imgSVG.getBBox());
         //this.imgSVG.setAttribute('x', 0 );
     }

    constructor(obj,img,x,y,nImages=1){

        this.obj=obj;
        this.x=x;
        this.y=y;

        let xetq=0;
        let yetq=0;

        if(typeof obj.selected == 'object'){
            xetq=obj.selected.imagen.xetq;
            yetq=obj.selected.imagen.yetq;
            obj.changeCanvas = ()=>{this.updateImage()};
        }

        
        
        //obj.changeCanvas=this.updateImage;
        //console.log("obj.dom:",obj.dom);
        //console.log("img:",img);
        //const opt = document.createElement('option');
        //obj.dom.setAttribute('value', element.nombre );
        //style="position:absolute; left:50%; top:50%;  transform: translate(-100%, -50%);"

        //<circle cx="100" cy="100" r="100" fill="gray"></circle>

        const circleSVG = document.createElementNS("http://www.w3.org/2000/svg",'circle');
        circleSVG.setAttribute('cx', x );
        circleSVG.setAttribute('cy', y );
        circleSVG.setAttribute('r', "5" );
        circleSVG.setAttribute('fill', 'blue' );
        circleSVG.setAttribute('fill-opacity', 0.2 );
        canvasSVG.appendChild(circleSVG);
        
        this.imgSVG = document.createElementNS("http://www.w3.org/2000/svg",'image');
        this.imgSVG.setAttribute('x',x);
        this.imgSVG.setAttribute('y',y);
        this.imgSVG.setAttribute('href', img );

        //<use xlink:href="#primcirc" />
        if(nImages>1){
            console.log(nImages);
        }
        
        canvasSVG.appendChild(this.imgSVG);
        //console.log("constructor()",this.imgSVG);

        //console.log("change",obj.changeCanvas());
        //obj.changeCanvas=this.updateImage;
        
        

        
        //console.log(this.imgSVG.getBBox());//{x: 50, y: 50, width: 56, height: 23}
        //const {height:img_h, width:img_w, x:img_x, y:img_y}=this.imgSVG.getBBox();
        //this.imgSVG.setAttribute('x', x-img_w/2 );
        //this.imgSVG.setAttribute('y', y-img_h/2 );
        //<image  x="50" y="120" href="./bombaMultietapas.svg" />


        //obj.dom.setAttribute('style', `position:absolute; left:${(x+xetq)/3}%; top:${(y+yetq)/2}%;  transform: translate(-50%, 0%); border:2px solid green; >` );
        //this.obj.dom.setAttribute('style', `position:absolute; left:${(this.x+xetq)/3}%; top:${(this.y+yetq)/2}%;  transform: translate(0%, 0%); border:2px solid green; >` );
        this.obj.dom.setAttribute('style', `position:absolute; left:${(this.x+xetq)/3}%; top:${(this.y+yetq)/2}%;  transform: translate(-50%, 0%); >` );
        //obj.dom.setAttribute('style', `position:absolute; left:${x/2}%; top:${y/2}%;  transform: translate(0%, -120%); >` );
        canvas.appendChild(obj.dom);

        //console.log(this.imgSVG.getBBox());
    }

    
}


class createSelector{

    _add = ( element ) => {
        const opt = document.createElement('option');
        opt.setAttribute('value', element.nombre );
        const name = document.createTextNode(element.nombre);
        opt.appendChild(name);
        this.dom.appendChild(opt);
    }
    
    //changeCanvas(){}
    
    change = ( func ) => {
        func();

        this.dom.addEventListener('change', (selected) => {
            this.selected = this.array.find( elem => elem.nombre === selected.target.value )
            //this.dom.style.display = "none";
            func();
            this.changeCanvas();
            //console.log();
        });
    }

    hide = () =>{
        this.showMenu=false;
        this.dom.style.display = "none";
    }

    show = () =>{
        this.showMenu=true;
        this.dom.style.display = "block";
    }

    toggle = () => {
        if(this.showMenu){
            this.hide();
        }
        else{
            this.show();
        }

    }

    constructor(array){
        this.array=array;
        this.selected=array[0];
        //this.dom = document.querySelector(selector);
        this.dom = document.createElement('select');

        this.showMenu = true;
        array.forEach( this._add );
    }
}


class createInput{

    change = ( func ) => {
        //this.value=this.domI.value;
        
        
        //func();
        this.domI.oninput = (slider) => {
            this.value=slider.target.value;
            this.domP.innerText=`${this.variable}: ${this.value}${this.units}`;
            //console.log("dom:",selected.target.value);
            //this.selected = this.array.find( elem => elem.nombre === selected.target.value )
            //this.dom.style.display = "none";
            func();
        };
    }

    hide = () =>{
        this.showMenu=false;
        this.dom.style.display = "none";
    }

    show = () =>{
        this.showMenu=true;
        this.dom.style.display = "block";
    }

    toggle = () => {
        if(this.showMenu){
            this.hide();
        }
        else{
            this.show();
        }

    }

    constructor(value,step,min,max, variable,units){
        //this.dom = document.querySelector(selector);
        this.value=value;
        this.variable=variable;
        this.units=units;

        this.dom = document.createElement('div');
        this.dom.setAttribute('style', "margin: 0; border: 0 none; padding: 0;" );
        

        this.domP = document.createElement('p');
        this.domP.setAttribute('align', "center" );
        //this.domP.setAttribute('style', "margin: 0; border: 0 none; padding: 0;border: 4px solid gray; " );
        this.domP.setAttribute('style', "margin: 0; border: 0 none; padding: 0;" );
        //this.domP.setAttribute('style', "line-height: 0.5;" );
        
        this.domP.innerText=`${this.variable}: ${this.value}${this.units}`;
        this.dom.appendChild(this.domP);

        this.domI = document.createElement('input');
        this.domI.setAttribute('align', "center" );
        this.domI.setAttribute('type', "range" );
        this.domI.setAttribute('value', value );
        this.domI.setAttribute('step', step );
        this.domI.setAttribute('min', min );
        this.domI.setAttribute('max', max );
        //this.domI.setAttribute('style', "width:100%; align-items: center; margin: 0; border: 0 none; padding: 0;border: 4px solid gray; " );
        //this.domI.setAttribute('style', "width:100%; align-items: center; margin: 0; border: 0 none; padding: 0; " );
        this.domI.setAttribute('style', "width:100%; align-items: center; margin: 0; padding: 0;border: 4px solid red; " );
        this.dom.appendChild(this.domI);

        this.showMenu = true;
        
    }
}

class createOutput{

    update = ( value ) => {
        this.value=value;
        this.domP.innerText=`${this.variable}: ${this.value}${this.units}`;
    }

    hide = () =>{
        this.showMenu=false;
        this.dom.style.display = "none";
    }

    show = () =>{
        this.showMenu=true;
        this.dom.style.display = "block";
    }

    toggle = () => {
        if(this.showMenu){
            this.hide();
        }
        else{
            this.show();
        }

    }

    constructor(value,variable,units){
        //this.dom = document.querySelector(selector);
        this.value=value;
        this.variable=variable;
        this.units=units;

        this.dom = document.createElement('div');
        
        

        this.domP = document.createElement('p');
        this.domP.setAttribute('align', "center" );
        //this.domP.setAttribute('style', "height: 0px;" );
        //this.domP.setAttribute('style', "margin: 0; border: 0 none; padding: 0;border: 4px solid gray; " );
        this.domP.setAttribute('style', "margin: 0; border: 0 none; padding: 0;" );
        //this.domP.setAttribute('style', "line-height: 0.5;" );
        
        this.domP.innerText=`${this.variable}: ${this.value}${this.units}`;
        this.dom.appendChild(this.domP);

        this.showMenu = true;
    }
}





let cWaterPump, waterPump;
let cMembrane, membrane;
let cNMembrane, Nmembrane;
let cFeedingTDS, feedingTDS;
let cTemperature, temperature;

let rejection, recirculation, permeate;

let dataPump;
let myChart;

let pointFeeding;
let pointPermeate;



const init = () => {
    waterPump=new createSelector(bombasMultietapas);
    waterPump.change(calculateBomb);
    //cWaterPump=new createCanvas(waterPump,"./bombaALTAPRES.svg",120,170);
    cWaterPump=new createCanvas(waterPump,waterPump.selected.imagen.nombre,150,20);


    membrane=new createSelector(membranas);
    membrane.change(calculateBomb);
    cMembrane=new createCanvas(membrane,membrane.selected.imagen.nombre,50,20);

    Nmembrane = new createInput(1,1,1,6,"Membranas","");
    Nmembrane.change(calculateBomb);
    cNmembrane = new createCanvas(Nmembrane,"",50,20);

    feedingTDS = new createInput(200,1,10,2000,"TDS","ppm");
    feedingTDS.change(calculateBomb);
    cFeedingTDS = new createCanvas(feedingTDS,"",200,140);

    temperature = new createInput(25,1,5,45,"Temperatura","°C");
    temperature.change(calculateBomb);
    cTemperature = new createCanvas(temperature,"",200,170);

    

    permeate = new createOutput(50,"Permeado","%");
    cPermeate = new createCanvas(permeate,"",100,140);

    rejection = new createInput(50,1,0,100,"Rechazo","%");
    rejection.change(calculateBomb);
    cRejection = new createCanvas(rejection,"",100,170);

    

    // recirculation = new createInput(0,1,0,100,"Recirculación","%");
    // recirculation.change(calculateRecirculation);
    // cRecirculation = new createCanvas(recirculation,"",200,50);

    calculateBomb();
    

    

    
      // Create a new line chart object where as first parameter we pass in a selector
      // that is resolving to our chart container element. The Second parameter
      // is the actual data object.
      //new Chartist.Line('.ct-chart', data, {low:0, showArea:true});

    // bombasMultietapas.forEach( addBomba );
    // despliega();
}


//Q=if((P-c)/a>0,(LN((P-c)/a))/b,"")

//alpha=2700 Coef. del fact. de correc. de temp
//pi_r=0.0385*TDS_test*(Temp_test+273.15)/(1000-TDS_test/1000)
//TCF_r=EXP(alpha*(1/298.15-1/(273.15+Temp_test)))
//pi_a=0.0385*TDS_agua*(Temp_agua+273.15)/(1000-TDS_agua/1000)
//TCF_a=EXP(alpha*(1/298.15-1/(273.15+temp_agua)))
//P=pi_a+(p_test-pi_r)*(Q/0.002629)*TFC_a/(flujoPermeado*TCF_r)
//0.002629*(P-pi_a)*(flujoPermeado*TCF_r)/((p_test-pi_r)*TFC_a)=Q

const calculateBomb = () =>{
    
    if (typeof membrane    != 'object' ||
        //typeof Nmembrane   != 'object' ||
        typeof waterPump   != 'object' ||
        typeof feedingTDS  != 'object' ||
        typeof temperature != 'object' ||
        typeof permeate    != 'object'   ){
        return 0;
    }
    
    permeate.update(100-rejection.value)

    //console.log(waterPump.selected.nombre,waterPump.selected.caudalNominal)
    const labels=[];
    //let series=[];
    const Qpump=[];
    const Qefficiency_min=[];
    const Qefficiency_max=[];
    const Qpermeate=[];
    const Qfull=[];
    const a=Number(waterPump.selected.ajuste.a);
    const b=Number(waterPump.selected.ajuste.b);
    const c=Number(waterPump.selected.ajuste.c);
    let Qmaxmin=false;
    let min, max;
    if(typeof waterPump.selected.eficiencia=='object'){
        min=Number(waterPump.selected.eficiencia.Qmin);
        max=Number(waterPump.selected.eficiencia.Qmax);
        Qmaxmin=true;
    }
    

    //console.log("membrane:",membrane);
    const flujoPermeado=Number(membrane.selected.flujoPermeado);

    const p_test=Number(membrane.selected.test.presion);
    const Temp_test=Number(membrane.selected.test.temperatura);
    const TDS_test=Number(membrane.selected.test.TDS);

    const TDS_agua=Number(feedingTDS.value);
    const Temp_agua=Number(temperature.value);
    
    const alpha=2700; //Coef. del fact. de correc. de temp
    const pi_r=0.0385*TDS_test*(Temp_test+273.15)/(1000-TDS_test/1000);
    const TCF_r=Math.exp(alpha*(1/(273.15+Temp_test)-1/298.15));
    const pi_a=0.0385*TDS_agua*(Temp_agua+273.15)/(1000-TDS_agua/1000);

    const TCF_a=Math.exp(alpha*(1/(273.15+Temp_agua)-1/298.15))
    const k=Number(0.002629*(flujoPermeado*TCF_r)/((p_test-pi_r)*TCF_a));
    const s=Number(1/(1-rejection.value/100));
    const Nmembranas=Nmembrane.value;

    
    //console.log(Temp_agua,pi_a,pi_r,TCF_a,TDS_agua);
    //console.log(a,b,c);
    const N=100;
    let Po=0;
    let Pf=a+c;

    if(typeof waterPump.selected.intervalo=='object'){
        //Q=Math.log( (P-c)/a )/b;
        const Pmin=a*Math.exp(waterPump.selected.intervalo.Qmax*b)+c;
        const Pmax=a*Math.exp(waterPump.selected.intervalo.Qmin*b)+c;
        Po=Pmin;
        //Pf=Pmax;
    }

    //for(let Pi=Po;Pi<=Pf;Pi+=dP){
    for(let i=0;i<N;i++){
        const P=Po+(Pf-Po)*i/(N-1);
        
        //console.log((P-c)/a);
        const l=(P-c)/a;

        if( l>=0 ){
            const Q = Math.log( l )/b;//caudal de la bomba
            const Q2=Nmembranas*k*(P-pi_a);//caudal de permeado
            const Q3=s*Q2;//caudal de permeado + rechazo
            if( Q>0){
                labels.push(P);
                Qpump.push(Q);
                if(Qmaxmin){
                    Qefficiency_min.push(min);
                    Qefficiency_max.push(max);
                }
                
                if(Q2>=0 && Q2<=Qpump[0]){
                    Qpermeate.push(Q2);
                }
                else{
                    Qpermeate.push(null);
                }
                
                if(Q3>=0 && Q3<=Qpump[0]){
                    Qfull.push(Q3);
                }
                else{
                    Qfull.push(null);
                }
                    
                
            }
        }
    }

    

    let Pn=0.75*c;
    for(let i=0;i<10;i++){
        const y=Nmembranas*b*s*k*(Pn-pi_a)-Math.log((Pn-c)/a);
        const yp=(Nmembranas*(Pn-c)*b*s*k-1)/(Pn-c);
        Pn=Pn-y/yp;
        
    }
    
    const QnPermeate=Nmembranas*k*(Pn-pi_a);
    const QnFeeding=s*QnPermeate;
    
    pointFeeding={x:Number(Pn),y:Number(QnFeeding)};
    pointPermeate={x:Number(Pn),y:Number(QnPermeate)};
    test=
        {
            x:Number(membrane.selected.test.presion),
            y:Number(0.002629*membrane.selected.flujoPermeado*Nmembranas)
        }

    


    
      let data = {
        labels: labels,
        datasets: [
        {
            label: `Permeado ${Nmembranas} membranas ${membrane.selected.nombre} `,
            backgroundColor: 'rgba(99, 255, 132,0.2)',
            borderColor: 'rgb(99, 255, 132)',
            data: Qpermeate,
            fill: false,
            pointRadius: 0,
            pointHoverRadius: 0,
            showLine: true
        },
        {
            label: `${rejection.value}% Rechazo + ${permeate.value}% Permeado`,
            backgroundColor: 'rgba(99, 132, 255,0.2)',
            borderColor: 'rgb(99, 132, 255)',
            data: Qfull,
            fill: false,
            pointRadius: 0,
            pointHoverRadius: 0,
            showLine: true
        },
        {
          label: "Bomba "+waterPump.selected.nombre,
          backgroundColor: 'rgba(255, 99, 132,0.2)',
          borderColor: 'rgb(255, 99, 132)',
          data: Qpump,
          fill: true,
          pointRadius: 0,
          pointHoverRadius: 0,
          showLine: true

        }
        ]
      };
      if(Qmaxmin){
          data.datasets.push(
            {
                label: "Bomba Qmin",
                backgroundColor: 'rgba(255, 99, 132, 0.2)',
                borderColor: 'rgba(255, 99, 132, 0.7)',
                borderDash: [10, 5],
                borderWidth: 1,
                data: Qefficiency_min,
                pointRadius: 0,
                pointHoverRadius: 0,
                showLine: true
            }
          )
          data.datasets.push(
            {
                label: "Bomba Qmax",
                backgroundColor: 'rgb(255, 99, 132, 0.2)',
                borderColor: 'rgba(255, 99, 132, 0.7)',
                borderDash: [10, 5],
                borderWidth: 1,
                data: Qefficiency_max,
                pointRadius: 0,
                pointHoverRadius: 0,
                showLine: true
            }

          )
      }
    
      const config = {
        //type: 'line',
        type: 'scatter',

        plugins: [
            {afterDraw: chart => {
               

               var ctx = chart.ctx;
               var xAxis = chart.scales.x;
               var yAxis = chart.scales.y;
               //console.log("***",chart.scales.x.ticks);
            //     xAxis.ticks.forEach((value, index) => {
            //     var x = xAxis.getPixelForTick(index);
            //     var yTop = yAxis.getPixelForValue(20);
            //     ctx.save();
            //     ctx.strokeStyle = '#aaaaaa';
            //     ctx.beginPath();
            //     ctx.moveTo(x, yTop);
            //     ctx.lineTo(x, yAxis.bottom);
            //     ctx.stroke();
            //     ctx.restore();
            //    });

                const x = xAxis.getPixelForValue(pointFeeding.x);
                const y_a = yAxis.getPixelForValue(0);
                const y_b = yAxis.getPixelForValue(pointPermeate.y);
                const y_c = yAxis.getPixelForValue(pointFeeding.y);

                const x_test = xAxis.getPixelForValue(test.x);
                const y_test = yAxis.getPixelForValue(test.y);
                

                ctx.save();
                ctx.strokeStyle = 'rgba(99, 255, 132,0.5)';
                ctx.strokeWidth = 6;
                ctx.lineWidth = 6;
                ctx.beginPath();
                ctx.moveTo(x,y_a);
                ctx.lineTo(x,y_b);
                ctx.stroke();
                ctx.restore();

                ctx.save();
                ctx.strokeStyle = 'rgba(99, 132, 255,0.5)';
                ctx.strokeWidth = 6;
                ctx.lineWidth = 6;
                ctx.beginPath();
                ctx.moveTo(x,y_b);
                ctx.lineTo(x,y_c);
                ctx.stroke();
                ctx.restore();

                ctx.save();
                ctx.fillStyle = "rgb(99, 255, 132)";
                ctx.beginPath();
                ctx.arc(x, y_b, 5, 0, Math.PI );
                ctx.closePath();
                ctx.fill();
                ctx.restore();

                ctx.save();
                //ctx.fillStyle = "#c82124"; //red
                ctx.fillStyle = "rgb(99, 132, 255)";
                ctx.beginPath();
                ctx.arc(x, y_b, 5, Math.PI, Math.PI * 2);
                ctx.closePath();
                ctx.fill();
                ctx.restore();

                ctx.save();
                ctx.fillStyle = "rgb(99, 132, 255)";
                ctx.beginPath();
                ctx.arc(x, y_c, 5, 0, Math.PI * 2);
                ctx.closePath();
                ctx.fill();
                ctx.restore();

                if(Qmaxmin){
                    ctx.save();
                    if(min<=pointFeeding.y && pointFeeding.y<=max){
                        ctx.fillStyle = "rgb(0, 200, 0)";
                    }
                    else{
                        ctx.fillStyle = "rgb(200, 0, 0)";
                    }
                    ctx.beginPath();
                    ctx.arc(x, y_c, 2, 0, Math.PI * 2);
                    ctx.closePath();
                    ctx.fill();
                    ctx.restore();
                }
                
                ctx.save();
                ctx.fillStyle = "rgb(64,64,64)";
                ctx.textAlign = 'center';
                ctx.textBaseline = 'bottom';
                ctx.fillText(`Qtotal=${pointFeeding.y.toFixed(2)}lpm`, x, y_c);
                ctx.restore();

                ctx.save();
                ctx.fillStyle = "rgb(64,64,64)";
                ctx.textAlign = 'center';
                ctx.textBaseline = 'middle';
                ctx.fillText(`Qpermeado=${pointPermeate.y.toFixed(2)}lpm`, x, (y_a+y_b)/2);
                ctx.restore();

                ctx.save();
                ctx.fillStyle = "rgb(64,64,64)";
                ctx.textAlign = 'center';
                ctx.textBaseline = 'middle';
                ctx.fillText(`Qrechazo=${(pointFeeding.y-pointPermeate.y).toFixed(2)}lpm`, x, (y_b+y_c)/2);
                ctx.restore();

                ctx.save();
                ctx.fillStyle = "rgb(64,64,64)";
                ctx.textAlign = 'center';
                ctx.textBaseline = 'top';
                ctx.fillText(`P=${pointFeeding.x.toFixed(2)}psi`, x, y_a+5);
                ctx.restore();

                if(Qmaxmin && (pointFeeding.y<min || max<pointFeeding.y)){
                    ctx.save();
                    ctx.fillStyle = "rgb(64,64,64)";
                    ctx.textAlign = 'center';
                    ctx.textBaseline = 'bottom';
                    ctx.fillText("Fuera del rango", x, y_c-12);
                    ctx.restore();
                }

                ctx.save();
                ctx.fillStyle = "rgba(64,64,64,0.5)";
                ctx.beginPath();
                ctx.arc(x_test, y_test, 5, 0, Math.PI * 2);
                ctx.closePath();
                ctx.fill();
                ctx.restore();

                ctx.save();
                ctx.fillStyle = "rgb(64,64,64)";
                ctx.beginPath();
                ctx.arc(x_test, y_test, 2, 0, Math.PI * 2);
                ctx.closePath();
                ctx.fill();
                ctx.restore();

                ctx.save();
                ctx.fillStyle = "rgb(64,64,64)";
                ctx.beginPath();
                ctx.arc(x, y_b, 2, 0, Math.PI * 2);
                ctx.closePath();
                ctx.fill();
                ctx.restore();

                ctx.save();
                ctx.strokeStyle = 'rgba(64, 64, 64,0.5)';
                ctx.strokeWidth = 2;
                ctx.lineWidth = 2;
                ctx.beginPath();
                ctx.moveTo(x_test,y_test);
                ctx.lineTo(x,y_b);
                ctx.stroke();
                ctx.restore();


                ctx.save();
                ctx.fillStyle = "rgb(64,64,64)";
                ctx.textAlign = 'center';
                ctx.textBaseline = 'top';
                ctx.fillText(`TDS=${membrane.selected.test.TDS}ppm`, x_test, y_test+5);
                ctx.restore();

            },
            beforeDraw: (chart) => {
                const ctx = chart.canvas.getContext('2d');
                ctx.save();
                ctx.globalCompositeOperation = 'destination-over';
                ctx.fillStyle = '#8591f9';
                ctx.fillRect(0, 0, chart.width, chart.height);
                ctx.restore();
              }
          }],
          
        data: data,
        
        options: {

            plugins: {
                title: {
                    display: true,
                    text: `Bomba ${waterPump.selected.nombre} · ${Nmembranas} Membranas ${membrane.selected.nombre}`
                },
                subtitle: {
                    display: true,
                    text: `TDS=${feedingTDS.value}ppm Temperatura=${temperature.value}°C`
                },
                // legend:{
                //     display:false
                // }
            },
            scales: {
                x: {
                  title: {
                    display: true,
                    text: 'Presión [psi]'
                  },
                },
                y: {
                  title: {
                    display: true,
                    text: 'Q [lpm]'
                  },
                },
              },
            animation: {
                duration: 0 // general animation time
            },
            hover: {
                animationDuration: 0 // duration of animations when hovering an item
            },
            responsive:true,
            maintainAspectRatio: false,
            aspectRatio: 0.75,
            responsiveAnimationDuration: 0 // animation duration after a resize
        },
        
      };

      
      
      if (typeof myChart == 'object'){
        myChart.destroy();
      }
      myChart = new Chart(
        document.getElementById('myChart'),
        config
      );


    //dataPump


    //Q=if((P-c)/a>0,(LN((P-c)/a))/b,"")
    //objBomba.hide();
}

const calculateMem = () =>{
    console.log(membrane.selected.nombre,membrane.selected.marca)
}

const calculateTDS = () =>{
    //console.log(objTDS.value);
}

const calculateTemperature = () =>{
    //console.log(objTemperature.value);
}

const calculateRejection = () =>{
    if (typeof permeate == 'object') {
        permeate.update(100-rejection.value)
    }
    
    //console.log(objRejection.value);
}

const calculateRecirculation = () =>{
    if (typeof permeate == 'object') {
        //objPermeate.update(100-(objRejection.value+objRecirculation.value)/2)
    }
    //console.log(objRecirculation.value);
}


const despliega = () =>{
    
}

init();
