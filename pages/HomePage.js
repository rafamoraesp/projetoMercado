const BasePage = require('./BasePage')
const By = require('selenium-webdriver').By


class HomePage extends BasePage{

    constructor(driver){
        super(driver)
        this.byDropDownOrigem = By.name('fromPort')
        this.byDropDownDestino = By.name('toPort')
        this.btnBuscar = By.css('input.btn.btn-primary')

    }

    async selecionarOrigemDestinoVoo(origem, destino){
        let dropDownOrigem = await this.driver.findElement(this.byDropDownOrigem)
        await dropDownOrigem.findElement(By.css(`[value="${origem}"]`)).click()

        let dropDownDestino = await this.driver.findElement(this.byDropDownDestino)
        await dropDownDestino.findElement(By.css(`[value="${destino}"]`)).click()

        await this.driver.findElement(this.btnBuscar).click()
    }

}

module.exports = HomePage