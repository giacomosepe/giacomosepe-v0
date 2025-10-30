import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export default function Foot() {
	return (
		<footer className='border-t border-border mt-auto'>
			<div className=' py-8'>
				<div className='flex items-center justify-center'>
					<span className='text-muted-foreground text-base md:text-sm'>
						Giacomo Sepe {new Date().getFullYear()}
					</span>
				</div>
			</div>
		</footer>
	);
}
