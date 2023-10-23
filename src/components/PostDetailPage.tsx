'use client'
import usePostStore from "@/store/postStore";
import date from 'date-and-time'
import DOMPurify from "dompurify";
import { useRouter } from "next/navigation";

const PostDetailPage = () => {
    const router = useRouter()

    const selectedPost = usePostStore((state: any) => state.selectedPost)
    const deletePost = usePostStore((state: any) => state.deletePost)
    console.log(selectedPost.content)

    const isEdited = selectedPost.updated_at > selectedPost.created_at
    const postDate = isEdited ? selectedPost.updated_at : selectedPost.created_at

    // dangerouslyPasteHTML()

    const handleDeleteClick = () => {
        alert("You're about to delete a post")
        deletePost(selectedPost.id)
    }

    const handleEditClick = () => {
        router.push(`create?id=${selectedPost.id}`)
    }

    return (
        <div className='grid gap-5 col-span-8'>
            <div className="bg-primary text-white grid items-center p-4 md:p-3 py-2 md:py-3 text-sm md:text-base rounded-md md:rounded-[0.625rem] h-fit">
                <p>Home &gt; Posts &gt; {selectedPost.title}</p>
            </div>
            <div className="grid gap-2.5">
                <h2 className="text-2xl md:text-3xl font-bold flex gap-4">{selectedPost.title} 
                    <span className="float-right flex gap-2">
                        <div onClick={handleEditClick} className="cursor-pointer">
                            <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24"><path d="M200-200h57l391-391-57-57-391 391v57Zm-80 80v-170l528-527q12-11 26.5-17t30.5-6q16 0 31 6t26 18l55 56q12 11 17.5 26t5.5 30q0 16-5.5 30.5T817-647L290-120H120Zm640-584-56-56 56 56Zm-141 85-28-29 57 57-29-28Z"/></svg>
                        </div>
                        <div onClick={handleDeleteClick} className="cursor-pointer">
                            <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24"><path d="M280-120q-33 0-56.5-23.5T200-200v-520h-40v-80h200v-40h240v40h200v80h-40v520q0 33-23.5 56.5T680-120H280Zm400-600H280v520h400v-520ZM360-280h80v-360h-80v360Zm160 0h80v-360h-80v360ZM280-720v520-520Z"/></svg>
                        </div>
                    </span></h2>
                <div className="flex flex-col md:flex-row gap-px md:gap-5 text-grey">
                    <p><span className="font-bold">By</span> Ridho Satriawan</p>
                    <p>{date.format(new Date(postDate), 'DD MMMM YYYY')} {isEdited ? '(edited)' : ''}</p>
                </div>
            </div>

            <div dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(selectedPost.content)}} className="grid gap-4"></div>

            {/* <p className='grid text-sm md:text-base marker:text-xl'>
                <span className='text-xl md:text-2xl font-bold'>
                    Apa itu HTML ?
                </span>
                <br />
                Buat kamu yang pernah membuat sebuah website pastinya sudah tidak asing lagi dengan yang namanya HTML. Sebenarnya apa sih HTML itu ? Kenapa menggunakan HTML untuk membuat website ?
                <br />
                <span className='text-xl md:text-2xl font-bold'>
                    Pengertian
                </span>
                <br />
                HTML merupakan singkatan dari Hyper Text Markup Language, merupakan bahasa markup standard yang digunakan untuk menampilkan dokumen ke Web Browser seperti Google Chrome dan Edge. HTML biasanya digunakan bersama teknologi lainya, seperti Cascading Style Sheets (CSS) dan bahasa scripting seperti Javascript. 
                <br />
                Struktur di dalam HTML terdiri dari serangkaian elemen, elemen tersebut berfungsi untuk memberi informasi kepada Web Browser tentang cara menampilkan konten. Elemen dalam HTML memiliki banyak jenis dan memiliki fungsinya masing-masing, seperti elemen paragraf , input, judul dan lainya. Pada umumnya elemen terdiri dari tag pembuka, konten dan tag penutup, ada juga sebagian elemen yang tidak memiliki tag penutup dan konten.
                <br />
                Sedangkan tag itu sendiri ditulis dengan cara diapit tanda kurung sudut dan untuk tag penutup diberi garis miring sebelum nama tagnya, sebagai contoh <p> </p>. Sedangkan untuk elemen yang hanya menggunakan satu tag, cara penulisanya diberi garis miring setelah nama tag contohny.
                <br />
                <span className='text-xl md:text-2xl font-bold'>
                    Sejarah Singkat
                </span>
                <br />
                HTML pertama kali dicetus pada tahun 1980 oleh Tim Berners-Lee, pada saat itu dia sedang bekerja di salah satu perusahaan yang bernama CERN (European Organization for Nuclear Research), dia mengusulkan untuk membuat sebuah sistem yang bernama ENQUIRE yang berfungsi untuk mengelola dokumen perusahaan.
                <br />
                Kemudian pada tahun 1990 Berners-Lee dan timnya yang berasal dari perusahaan yang sama mulai mencari pendanaan untuk projeknya akan tetapi tidak berjalan dengan lancar. HTML mulai dipublikasikan pada tahun 1991 dan memiliki 18 tag, hingga sekarang HTML mengalami perkembangan.
            </p>

            <p className='grid text-sm md:text-base marker:text-xl'>
                <h2>Introduction</h2>
                <p>Artificial Intelligence (AI) is often described as the driving force of the fourth industrial revolution. Its influence can be felt across various sectors—healthcare, finance, transportation, and even the arts. While the benefits are too great to ignore, there&apos;s an increasing debate on the ethical dimensions of AI.</p>

                <h2>What is Artificial Intelligence?</h2>
                <p>AI, at its core, is a multi-disciplinary field that integrates elements from mathematics, computer science, and engineering to develop systems capable of mimicking human cognitive functions. It’s not just about robots; it also encompasses algorithms, machine learning, and more.</p>

                <h2>Unfolding Benefits</h2>
                <p>From diagnosing diseases more accurately to predicting stock market trends, AI has proven its worth. It&apos;s not an understatement to say that AI is revolutionizing our lives in unimaginable ways.</p>

                <h2>Ethical Concerns</h2>
                <p>However, AI is not without its ethical complications. It raises concerns about job losses due to automation, data privacy, and potentially reinforcing social biases through algorithms. It&apos;s crucial to question who is programming these AI systems and the intrinsic biases they might carry.</p>

                <h2>The Path Forward</h2>
                <p>There&apos;s no stopping the advancement of AI. What we can do is shape its development responsibly. Ethical guidelines and governance mechanisms are essential in steering AI toward positive outcomes for society.</p>

                <h2>Conclusion</h2>
                <p>As AI technologies become more deeply integrated into our daily lives, we need to be more discerning consumers and vigilant citizens. Ethical AI is not a far-off ideal; it is an imperative that needs to be part of ongoing discussions.</p>
            </p> */}
        </div>
    );
}

export default PostDetailPage;