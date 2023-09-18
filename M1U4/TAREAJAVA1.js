var metros = prompt ('¿A qué distancia queda el evento?', 'Ingrese la distancia en metros');

  if (metros >= 0 && metros <= 1000) {
    document.write ('vamos'+' '+'a pie');
  } else if (metros > 1000 && metros <= 10000) {
    document.write ('vamos'+' '+'en bicicleta');
  } else if (metros > 10000 && metros <= 30000) {
    document.write ('vamos'+' '+'en colectivo');
  } else if (metros > 30000 && metros <= 100000) {
    document.write ('vamos'+' '+'en auto');
  } else {
    document.write ('vamos'+' '+'en avión');
  }


