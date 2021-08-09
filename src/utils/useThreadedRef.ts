import { ForwardedRef, MutableRefObject, useImperativeHandle, useRef } from 'react';
/**
 * Just a nice wrapper around some ugly typing
 * Threads through an Input ref onto a lower ref
 * Allows the forwardReffed component to use the passed ref ie. calling `ref.focus()` etc
 * @example 
    const Input = forwardRef<HTMLInputElement | null, Props>((props: Props, ref) => {
        const inputRef = useThreadedRef(ref);
        // can call ref methods now!
        useEffect(() => inputRef.focus(), [])
        return <input ref={inputRef} />
    })
 */
export function useThreadedRef<T = HTMLInputElement>(ref: ForwardedRef<T | null>): MutableRefObject<T | null> {
    const inputRef = useRef<T | null>(null);
    useImperativeHandle<T | null, T | null>(ref, () => inputRef.current);
    return inputRef;
}
