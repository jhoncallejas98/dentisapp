document.getElementById('fecha-nacimiento').addEventListener('change', function() {
    const fechaNacimiento = new Date(this.value);
    const hoy = new Date();
    let edad = hoy.getFullYear() - fechaNacimiento.getFullYear();
    const mes = hoy.getMonth() - fechaNacimiento.getMonth();
    
    if (mes < 0 || (mes === 0 && hoy.getDate() < fechaNacimiento.getDate())) {
        edad--;
    }
    
    document.getElementById('edad').value = edad + ' aÃ±os';
});

//function googlesheets(){
    const scriptURL = 'https://script.google.com/macros/s/AKfycbzfXcT1hOJTL7Tc61w3ym3ascK8ktHA2I5Wdzk2QI4ZQC9kKaUVr_Z1Txlrf-U_G7F5/exec';

    document.getElementById('hc-form').addEventListener('submit', function(e) {
    e.preventDefault();

    const formData = {
        nombre: this.nombre.value,
        documento: this.documento.value,
        fechaNacimiento: this.fechaNacimiento.value,
        edad: this.edad.value,
        direccion: this.direccion.value,
        ciudad: this.ciudad.value,
        barrio: this.barrio.value,
        correo: this.correo.value,
        estadoCivil: this['estado-civil'].value,
        ocupacion: this.ocupacion.value,
        sexo: this.sexo.value,
        grupoEtnico: this['grupo-etnico'].value,
        tipoSangre: this['tipo-sangre'].value,
        profesion: this.profesion.value,
        covid: this.covid.value,
        motivoConsulta: this['motivo-consulta'].value,
        historiaEnfermedad: this['historia-enfermedad'].value,
        presentaDolor: this['presenta-dolor'].value,
        escalaDolor: this['escala-dolor'].value,
        antecedentesPersonales: this['antecedentes-personales'].value,
        obsAntecedentesPersonales: this['obs-antecedentes-personales'].value,
        medicacionActual: this['medicacion-actual'].value,
        antecedentesFamiliares: this['antecedentes-familiares'].value,
        obsAntecedentesFamiliares: this['obs-antecedentes-familiares'].value,
        higieneOral: this['higiene-oral'].value,
        examenIntraoral: this['examen-intraoral'].value,
        hallazgosClinicos: this['hallazgos-clinicos'].value,
        hallazgosRadiograficos: this['hallazgos-radiograficos'].value,
        nombreAcompanante: this['nombre-acompanante'].value,
        idAcompanante: this['id-acompanante'].value,
        parentesco: this.parentesco.value,
        esAcudiente: this['es-acudiente'].value,
        nombreAcudiente: this['nombre-acudiente'].value,
        idAcudiente: this['id-acudiente'].value,
        telefonoAcudiente: this['telefono-acudiente'].value    
    };

    fetch(scriptURL, {
        method: 'POST',
        body: JSON.stringify(formData),
        headers: {
        'Content-Type': 'application/json'
        },
        mode: 'no-cors'
    })
    .then(response => alert('Formulario enviado correctamente'))
    .catch(error => alert('Error al enviar el formulario'));
    });

//}