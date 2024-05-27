### Avaluació del Codi de l'Exercici "Formulari de Productes"

#### Repte 1 - Validació de Formularis (4p)

1. **Totes les validacions a través de JS (0,5p)**:

   - Correcte. No s'utilitzen validacions HTML, sinó que es fan totes a través de JavaScript.

2. **Ús d'almenys tres esdeveniments diferents per les validacions (0,5p)**:

   - Incorrecte. S'han utilitzat només dos esdeveniments: `input` i `submit`. Falten altres esdeveniments com `change`, `focus` o `blur`.

3. **Validacions - 1a Part (1p)**:

   - **Nom i cognom han de tenir com a mínim 3 caràcters i menys de 50**:
     - Correcte. Es comprova la llargada del nom i cognom.
   - **No poden contenir números**:
     - Correcte. Es comprova que no continguin números amb una expressió regular.
   - **L'adreça de correu electrònic ha de tenir un caràcter @ i un caràcter .**:
     - Correcte. Es comprova l'adreça de correu electrònic amb una expressió regular.

4. **Validacions - 2a Part (1p)**:

   - **El gènere ha de ser una de les opcions disponibles al formulari**:
     - Implementat però no s'ha utilitzat en la funcionalitat final.
   - **Ha de ser major d'edat per poder realitzar la comanda**:
     - Correcte. Es comprova l'edat de l'usuari i es mostra un `alert` si no és major d'edat.
   - **El text a "Message" ha de tenir com a mínim 10 caràcters i com a màxim 200**:
     - Correcte. Es comprova la llargada del missatge.

5. **Validacions - 3a Part (1p)**:
   - **El producte ha de ser una de les opcions disponibles al formulari**:
     - No implementat. No es comprova si el producte seleccionat és vàlid abans d'afegir-lo a la llista.
   - **La quantitat ha de ser un nombre enter entre 1 i 10**:
     - No implementat. No es comprova si la quantitat és vàlida abans d'afegir el producte.

Comentaris:

- Les validacions funcionen correctament per la majoria dels camps, però falten esdeveniments adequats.
- La validació del gènere està implementada però no s'ha integrat a la funcionalitat final.
- No es comprova la validesa del producte seleccionat ni la quantitat abans d'afegir-los.

#### Repte 2 - Afegir Productes al Formulari (5p)

1. **Carregar els productes disponibles al formulari (2p)**:

   - Implementat parcialment. Els productes es carreguen correctament al select, però la quantitat per defecte de 1 i el preu unitari no es mostren correctament en seleccionar un producte.

2. **Afegir productes a una llista (2p)**:

   - Incorrecte. Els productes no es poden afegir a la llista correctament. Faltava la validació abans d'afegir els productes.

3. **Modificar i finalitzar el formulari (1p)**:
   - No implementat. No es mostra un missatge final de confirmació quan es fa el submit del formulari indicant que la comanda s'ha realitzat correctament i l'import final a pagar.

Comentaris:

- La funcionalitat per carregar els productes al formulari està parcialment implementada. No es mostra la quantitat per defecte de 1 ni el preu unitari correctament.
- La funcionalitat per afegir productes a la llista està parcialment implementada, però falta la validació abans d'afegir els productes.
- No es mostra un missatge final de confirmació després del submit.

#### Qualitat del Codi, Estructura, Llegibilitat i Comentaris (1p)

1. **Qualitat del codi**:

   - El codi presenta una estructura bàsica però necessitaria millorar.

2. **Estructura i llegibilitat**:
   - El codi és llegible però falta modularitat i comentaris explicatius.

Comentaris:

- Incloure més comentaris per explicar la funcionalitat del codi ajudaria a millorar la seva mantenibilitat.
- La gestió d'errors es podria millorar afegint feedback a l'usuari amb missatges d'error personalitzats sota els camps corresponents.

### Resum:

- **Validacions:** Implementades correctament per la majoria dels camps, però falten esdeveniments adequats. La validació del gènere està implementada però no s'ha integrat a la funcionalitat final. No es comprova la validesa del producte seleccionat ni la quantitat abans d'afegir-los.
- **Afegir Productes al Formulari:** Implementació parcial. Cal completar la funcionalitat per mostrar la quantitat per defecte de 1 i el preu unitari correctament, afegir productes a una llista de productes seleccionats amb validació prèvia, i mostrar un missatge final de confirmació després del submit.
- **Qualitat del Codi:** La qualitat del codi podria millorar amb una millor estructura, modularitat i més comentaris explicatius.
