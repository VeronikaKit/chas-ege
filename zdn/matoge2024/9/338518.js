(function() { retryWhileError(function() {
    let a=sluchch(1,10).pm();
    let b=sluchch(1,10).pm();
    let c=sluchch(1,10).pm();
    let e=sluchch(1,10).pm();
    let v=sluchch(1,10).pm();
    let f=sluchch(1,10).pm();
    let g=sluchch(1,10).pm();
    let z=(1).pm();
    let i=a-e-z*v;
    let l=b-f;
    let n=c-z*g;
    let s=l**2-4*i*n;
    let d=(-l-Math.sqrt(s))/(2*i);
    let h=(-l+Math.sqrt(s))/(2*i);
    genAssert(s>0, 'Дискриминант не должен быть отрицательным');
    genAssertZ1000(d, 'Корень не должен быть слишком дробным');
    genAssertZ1000(h, 'Корень не должен быть слишком дробным');
    NAtask.setEquationTask({
      parts: [a+'x^2+'+b+'x+'+c,e+'x^2+'+f+'x+'+z+'('+ g+'+'+v+'x^2)'],
	    roots: [d,h],
    });	

}, 2000);})();
//VeronikaKit
//Решу ОГЭ 338518
