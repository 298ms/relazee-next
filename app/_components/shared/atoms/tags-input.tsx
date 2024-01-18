import { Dispatch, SetStateAction, useState } from 'react'

function TagsInput({ tags, setTags, placeholder, ...props }:
    {
        tags: string[],
        setTags: Dispatch<SetStateAction<string[]>>
        placeholder: string
    }) {
    // const [tags, setTags] = useState<string[]>([])

    function handleKeyDown(e: any) {
        console.log(e.key)
        if (e.key !== 'Enter' && e.key !== ' ') return
        const value = e.target.value
        if (!value.trim()) return
        setTags([...tags, value])
        e.target.value = ''
    }

    function removeTag(index: any) {
        setTags(tags.filter((el, i) => i !== index))
    }

    return (
        <div className="max-w-full flex flex-row flex-wrap rounded-lg bg-relazee-dark-3 px-4 py-2 gap-2">
            {tags && tags.map((tag, index) => (
                <div className="bg-relazee-dark-2 rounded-md px-2" key={index}>
                    <span className="text-sm">{tag}</span>
                    <span className="ml-2 cursor-pointer" onClick={() => removeTag(index)}>&times;</span>
                </div>
            ))}
            <input
                onKeyDown={handleKeyDown}
                type="text"
                className="bg-relazee-dark-3 focus:outline-none w-full placeholder-relazee-text-placeholder text-sm text-relazee-text-heading"
                placeholder={placeholder}
                {...props}
            />
        </div>
    )
}

export default TagsInput