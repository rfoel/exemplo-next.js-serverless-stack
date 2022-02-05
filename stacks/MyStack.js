import * as sst from '@serverless-stack/resources'

export default class MyStack extends sst.Stack {
  constructor(scope, id, props) {
    super(scope, id, props)

    // Configuração do Next.js aqui
    const site = new sst.NextjsSite(this, 'Site', {
      path: 'src',
    })

    this.addOutputs({
      URL: site.url,
    })
  }
}
