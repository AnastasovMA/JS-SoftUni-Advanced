function checkWorker(worker){
    if(worker.dizziness === true){
        worker.levelOfHydrated += 0.1 * worker.weight * worker.experience;
        worker.dizziness = false;
    }
    return worker;
}
console.log(checkWorker({weight: 95,
    experience: 3,
    levelOfHydrated: 0,
    dizziness: false }
  
  ))