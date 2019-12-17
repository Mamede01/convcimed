import firebase from '@react-native-firebase/app'
import '@react-native-firebase/auth'
import '@react-native-firebase/database'
import '@react-native-firebase/storage'
export default () => ({

    signin: (email, password) => {
        return new Promise((resolve, reject) => {

            //firebase.auth().signOut()

            firebase.auth().onAuthStateChanged((user) => {
                if (user) {
                    let json = {
                        email: user.email,
                        token: user.uid
                    }
                    resolve(json)
                } else {

                }
            })


            if (email && password) {
                firebase
                    .auth()
                    .signInWithEmailAndPassword(email, password)
                    .catch((error) => {
                        switch (error.code) {
                            case 'auth/user-not-found':
                                alert('Email não encontrado, favor cadastrar.')
                                resolve(error)
                                break;
                            case 'auth/wrong-password':
                                alert('Email ou senha incorretos')
                                resolve(error)
                                break;
                            default:
                                alert('Ocorreu um erro! tente novamente mais tarde!')
                                resolve(error)
                                break;
                        }
                    })
            }
        })
    },

    signup: (email, password, name, cpf) => {
        return new Promise((resolve, reject) => {
            /* setTimeout(() => {
                 let json = {
                     error: ''
                 };
                 if (email == 'matheusmame@hotmail.com') {
                     json.error = 'E-mail já existe!'
                 } else {
                     json.token = '123456'
                 }
                 resolve(json);
             }, 1000)
             */
            console.log(email)
            firebase
                .auth()
                .signOut()

            firebase
                .auth()
                .onAuthStateChanged((user) => {
                    if (user) {
                        firebase.database().ref('usuarios').child(user.uid).set({
                            nome: name,
                            cpf: cpf,
                            email: email
                        })
                        resolve(user)
                    }
                })

            if (email && password && name && cpf) {
                firebase
                    .auth()
                    .createUserWithEmailAndPassword(email, password)
                    .catch((error) => {
                        switch (error.code) {
                            case 'auth/invalid-email':
                                alert('Email incorreto, favor verificar.')
                                resolve(error)
                                break;
                            case 'auth/email-already-in-use':
                                alert('Este e-mail já tem uma conta criada..')
                                break;
                            default:
                                alert('Ocorreu um erro! tente novamente mais tarde!')


                        }
                    })
            }
        })
    },

    signOut: () => {
        return new Promise((resolve, reject) => {
            firebase.auth().signOut().then(function () {
                let json = {
                    mesage: 'Usuario Deslogado'
                }
                resolve(json)
            }).catch(function (error) {
                console.log(error)
            });
        })
    },

    getUserDetails: (uid) => {
        return new Promise((resolve, reject) => {
            firebase
                .database()
                .ref('usuarios')
                .child(uid)
                .once('value')
                .then((snapshot) => {
                    let nome = snapshot.val().nome
                    resolve(nome)
                })
        })
    },

    getAgenda: () => {
        return new Promise((resolve, reject) => {

            firebase
                .database()
                .ref('agenda')
                .child('Days')
                .on('value', (snapshot) => {
                    const day = []

                    snapshot.forEach((chlidItem) => {
                        day.push({
                            day: chlidItem.key,
                        })
                        resolve(day)
                    })
                })

        })
    },

    getAgendaMes: () => {
        return new Promise((resolve, reject) => {

            firebase
                .database()
                .ref('agenda')
                .child('Mes')
                .on('value', (snapshot) => {
                    const mes = []
                    snapshot.forEach((chlidItem) => {
                        mes.push({
                            mes: chlidItem.key,
                        })
                        resolve(mes)
                    })
                })

        })
    },

    getItemDias: (dias) => {
        return new Promise((resolve, reject) => {

            firebase
                .database()
                .ref('agenda')
                .child(dias)
                .on('value', (snapshot) => {
                    const evento = []
                    snapshot.forEach((chlidItem) => {
                        evento.push({
                            horario: chlidItem.key,
                            evento: chlidItem.val(),
                        })

                        resolve(evento)
                    })
                })

        })
    },

    getLocal: () => {
        return new Promise((resolve, reject) => {

            firebase
                .database()
                .ref('local')
                .child('janeiro')
                .once('value')
                .then((snapshot) => {
                    const local = []
                    local.push({
                        endereco: snapshot.val().endereco,
                        foto: snapshot.val().foto,
                        hotel: snapshot.val().hotel,
                        latitude: snapshot.val().latitude,
                        longitude: snapshot.val().longitude
                    })

                    resolve(local)
                })

        })
    },

    getFotos: () => {
        return new Promise((resolve, reject) => {
            var storage = firebase.storage()
            var listRef = storage.ref('/')
            let fotos = []
          
            listRef
                .child('convensao_janeiro/')
                .listAll() 
                .then((res) => {                     
                  res.items.forEach(async (imagemRef) => {  

                      const teste = await  imagemRef.getDownloadURL().then((url)=>{
                            fotos.push({url:url})     
                                                                           
                            return(fotos)
                        })                                         
                        
                    })             
                    
                })                     
            setTimeout(() => {                
                resolve(fotos)
            }, 2000)          

        })
    
    },

    getPesquisa:() => {
        return new Promise((resolve, reject) => {
            firebase
            .database()
            .ref('pesquisa')
            .child('texto')
            .on('value', (snapshot) => {
                const perguntas = []
                snapshot.forEach((chlidItem) => {
                    perguntas.push({
                        numero: chlidItem.key,
                        pergunta: chlidItem.val(),
                    })

                    resolve(perguntas)
                })
            })
        })
    }

})