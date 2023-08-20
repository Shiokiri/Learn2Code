fun trickFunction() {
    println("trickFunction")
}

val trickLambda = {
    println("trickLambda")
}

fun main(args: Array<String>) {
    val trickFun= ::trickFunction
    val trickLam = trickLambda
    trickFun()
    trickLam()

    val coins: (Int) -> String = { quantity ->
        "$quantity quarters / treatFunction1"
    }
    val coinsIt: (Int) -> String = {
        "$it quarters / treatFunction2"
    }
    val treatFunction1 = trickOrTreat(false, coins)
    val treatFunction2 =  trickOrTreat(false, coinsIt)
    val treatFunction3 = trickOrTreat(false, { "$it quarters / treatFunction3" })
    val treatFunction4 = trickOrTreat(false) { "$it quarters / treatFunction4" }
    val trickFunction = trickOrTreat(true, null)
    treatFunction1()
    treatFunction2()
    treatFunction3()
    treatFunction4()
    trickFunction()
}

fun trickOrTreat(isTrick: Boolean, extraTreat: ((Int) -> String)?): () -> Unit {
    if (isTrick) {
        return trick
    } else {
        if (extraTreat != null) {
            println(extraTreat(5))
        }
        return treat
    }
}

val trick = {
    println("No treats!")
}

val treat = {
    println("Have a treat!")
}