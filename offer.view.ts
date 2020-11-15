namespace $.$$ {

	export class $hyoo_offer extends $.$hyoo_offer {

		business() {
			return this.$.$mol_state_arg.value( 'business' ) ?? 'about'
		}

		pages() {
			return [
				this.Main_page() ,
				... ( this.business() === 'private' ? [ this.Private_page() ] : [] ) ,
				... ( this.business() === 'corporate' ? [ this.Corporate_page() ] : [] ) ,
				... ( this.business() === 'dev' ? [ this.Dev_page() ] : [] ) ,
			]
		}

	}

}
