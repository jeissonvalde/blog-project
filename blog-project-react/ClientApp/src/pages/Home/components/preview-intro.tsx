export function PreviewIntro(props: any) {
    let {
        blg,
        current,
        handleClickPreviewArticle,
    } = props
    const introSplited = blg.introduction.split(',')

    if (!blg.introduction || !blg.introduction[0]) return (
        <></>
    )

    let device_width = window.getComputedStyle(document.getElementById('root') as HTMLElement).width,
        device_height = window.getComputedStyle(document.getElementById('root') as HTMLElement).height,
        ulNavElem = document.querySelector('#home-headline-list')
    // ulNavElem?.insertAdjacentHTML('beforebegin', `<li style="background-color: white;">Ancho ${device_width}, y alto: ${device_height} </li>`)

    return (
        <div className="pub-preview-intro">

            <div className="pub-preview-intro-introduction">
                {introSplited.map((intr: any, jdx: number) => {
                    let textStyle = {
                        "--jdx": jdx + 1
                    } as any

                    return (
                        <div key={jdx} className="paragraph-line">
                            <span
                                onClick={handleClickPreviewArticle}
                                style={textStyle}>{intr}</span>
                        </div>
                    )
                })}
            </div>

            <div className="pub-preview-intro-speak">
                {blg.messages ? blg.messages.map((messData: any, kdx: number) => {

                    return (
                        <div key={kdx} className="ppis-message">
                            <p className="ppis-conversation">{messData.message}</p>
                            <div className="ppis-prompt">
                                {messData.prompt.map((prom: any, ldx: number) => {

                                    return (
                                        <div key={ldx} className="ppis-prompt-opt" data-value={prom.data}>{prom.label}</div>
                                    )
                                })}
                            </div>
                            <div className="ppis-message field">
                                <input placeholder="Mensaje" />
                                <div className="button-prompt-send-message">
                                    Enviar mensaje
                                </div>
                            </div>
                        </div>
                    )
                }) : ''}
            </div>
        </div>
    )
};