function showBody(index){
    if (document.querySelector('.card-body-'+ index).style.display === 'none'){
        document.querySelector('.card-body-'+index).style.display = 'block';
        document.querySelector('.card-body-'+index).style.position = 'relative';
        
    } else {
        document.querySelector('.card-body-'+index).style.display = 'none';
        document.querySelector('.card-body-'+index).style.position = 'absolute';
        
    }
}

function share(){
    window.alert('Let say you already share it');
}

function explore(){
    window.alert('Let say you open a new page to show the content');
}