export default function chatbox() {
    return(
        <div className="bg-white h-screen grid grid-cols-12 grid-rows-2 p-8 py-10">
        <div className="col-span-4 row-span-1">
            <h1>AI Chat</h1>
            <span>Conversations with machines for assistance and information exchange.</span>
        </div>
        <div className="col-span-8 row-span-1">
            {/* Nội dung cột 2 */}
        </div>
        <div className="col-span-12 row-span-1">
            {/* Nội dung hàng mới */}
        </div>
    </div>
    )
}