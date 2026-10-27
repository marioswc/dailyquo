function Footer () {
    return (
        <>
        <footer className="border-t border-line py-4">
            <div className="flex items-center justify-center ">
                <small className="flex items-center gap-1">
                    created by
                    <a href="https://mariosdev.me/" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="underline-offset-2 hover:underline hover:text-primary transition-all duration-300 ease-linear">
                        marioswc
                    </a> 
                </small>
            </div>
        </footer>
        </>
    )
}

export default Footer