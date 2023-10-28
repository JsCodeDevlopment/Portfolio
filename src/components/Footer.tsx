export function Footer() {
    const currentYear = new Date().getFullYear()
    return (
        <div className="flex bg-black h-9 items-center justify-center">
        <h1 className="text-sm">{`Feito com ❤ por Jonatas Silva - © Todos os direitos reservados. 2023-${currentYear}`}</h1>
        </div>
    )
}