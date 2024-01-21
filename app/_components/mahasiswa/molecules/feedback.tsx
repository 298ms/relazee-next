import { BsEmojiFrown, BsEmojiHeartEyes, BsEmojiNeutral, BsX } from "react-icons/bs";
import { Dialog } from "@radix-ui/themes";
import { useState } from "react";

export default function Feedback() {
    return (
        <div className='bg-relazee-dark-2 rounded-2xl p-4 flex flex-col gap-3'>
            <h5 className='text-relazee-text-heading font-semibold'>Feedback</h5>
            <p className='text-xs text-relazee-text-body-2'>Berikan umpan balik untuk membantu meningkatkan kualitas layanan kami</p>
            <Dialog.Root>
                <Dialog.Trigger>
                    <button className='border border-relazee-border rounded-md text-relazee-text-heading text-xs self-start py-2 px-4'>Berikan</button>
                </Dialog.Trigger>
                <Dialog.Content className="!bg-relazee-dark-2 !p-2 !max-w-[520px]">
                    <FeedbackModal />
                </Dialog.Content>
            </Dialog.Root>
        </div>
    )
}

const FeedbackModal = () => {
    const [feedbackText, setFeedbackText] = useState('')
    return (
        <div className="rounded-md p-4 flex flex-col gap-3">
            <div className="flex flex-row justify-between">
                <div className="flex flex-col gap-1">
                    <h3 className="text-xl font-bold text-relazee-text-heading">Tell us your experience</h3>
                    <span className="text-relazee-text-body-2 text-xs">Take a minute to give quick review for us</span>
                </div>
                <Dialog.Close>
                    <button className="border border-relazee-border rounded-full w-7 h-7 flex items-center justify-center text-relazee-text-heading hover:bg-red-500 hover:border-red-500 transition-all"><BsX /></button>
                </Dialog.Close>
            </div>
            <span className="text-relazee-text-heading font-medium text-xs">Apa yang kamu rasakan?</span>
            <div className="flex flex-row gap-10">
                <div className="flex flex-col items-center gap-2 text-relazee-text-body-1 hover:text-relazee-accent-yellow-1 transition-all">
                    <BsEmojiNeutral className="text-5xl" />
                    <span className="text-sm font-medium">Average</span>
                </div>
                <div className="flex flex-col items-center gap-2 text-relazee-text-body-1 hover:text-relazee-accent-yellow-1 transition-all">
                    <BsEmojiFrown className="text-5xl" />
                    <span className="text-sm font-medium">Not Great</span>
                </div>
                <div className="flex flex-col items-center gap-2 text-relazee-text-body-1 hover:text-relazee-accent-yellow-1 transition-all">
                    <BsEmojiHeartEyes className="text-5xl" />
                    <span className="text-sm font-medium">Amazing</span>
                </div>
            </div>
            <span className="text-relazee-text-heading font-medium text-xs">Berikan masukan yang....</span>
            <textarea
                rows={3}
                value={feedbackText}
                onChange={(e) => setFeedbackText(e.target.value)}
                placeholder='Let&apos;s share what&apos;s going on your mind...[optional]'
                className='bg-relazee-dark-3 w-full rounded-lg px-4 p-2.5 placeholder-relazee-text-placeholder text-sm text-relazee-text-heading'
            />
            <button className='bg-relazee-orange text-white rounded-lg font-medium text-sm whitespace-nowrap px-4 py-3 self-start'>Kirim Ulasan</button>
        </div>
    )
}