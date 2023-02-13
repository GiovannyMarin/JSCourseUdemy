var video = Array()
video[1] = Array()
video[1] = ['nome'] = 'Nanatzu no Taizai'
video[1] = ['categoria'] = 'anime'

function getVideo(video){
try{
console.log(video[0]['nome'])
}catch(e){
    tratarErro(e)
    console.log('pegando erro')
    throw new TypeError('uma pena')
}finally{
    console.log('Sempre passa por aqui')
}
}

function tratarErro(e){
    console.log(e)
}