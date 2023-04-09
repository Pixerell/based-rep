function scrollFunction(id: string): void {

    const sideElement: HTMLElement | null = document.getElementById(id);
    if (sideElement !== null && sideElement.style !== null)
    {
        if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
            sideElement.style.top = "0";
        } else {
            sideElement.style.top = "70px";
        }
    }
}

export default scrollFunction;
