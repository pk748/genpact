import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { formatDistance } from 'date-fns';

export interface Data {
  id: number;
  name: string;
  disabled: boolean;
}

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
})
export class LandingPageComponent implements OnInit {

  checked = false;
  loading = false;
  indeterminate = false;
  listOfData: Data[] = [];
  listOfCurrentPageData: Data[] = [];
  setOfCheckedId = new Set<number>();
 
  time = formatDistance(new Date(), new Date());
  disable_next_btn: boolean = true
  constructor(private router: Router,) { }




  updateCheckedSet(id: number, checked: boolean): void {
    if (checked) {
      this.setOfCheckedId.add(id);
    } else {
      this.setOfCheckedId.delete(id);
    }
  }

 
  refreshCheckedStatus(): void {
    const listOfEnabledData = this.listOfCurrentPageData.filter(({ disabled }) => !disabled);
    this.checked = listOfEnabledData.every(({ id }) => this.setOfCheckedId.has(id));
    this.indeterminate = listOfEnabledData.some(({ id }) => this.setOfCheckedId.has(id)) && !this.checked;
  }

  onItemChecked(id: number, checked: boolean): void {
    this.disable_next_btn = false
    this.updateCheckedSet(id, checked);
    this.refreshCheckedStatus();
  }

  onAllChecked(checked: boolean): void {
    this.disable_next_btn = false
    this.listOfCurrentPageData.filter(({ disabled }) => !disabled).forEach(({ id }) => this.updateCheckedSet(id, checked));
    this.refreshCheckedStatus();
  }

  sendRequest(): void {
    
    this.loading = true;
    const requestData = this.listOfData.filter(data => this.setOfCheckedId.has(data.id));
    console.log(requestData);
    setTimeout(() => {
      this.setOfCheckedId.clear();
      this.refreshCheckedStatus();
      this.loading = false;
      this.router.navigate(['/dashboard/home']);
    }, 1000);
  }

  ngOnInit(): void {
    this.listOfData = [
      {
        id: 1,
        name: `Volume Rebet`,
        disabled: false
      },
      {
        id: 2,
        name: `New Store`,
        disabled: false
      },
      {
        id: 3,
        name: `Deducted Co-op`,
        disabled: false
      },
      {
        id: 4,
        name: `Deducted Co-op`,
        disabled: false
      },
      {
        id: 5,
        name: `Placeholder`,
        disabled: false
      },
      {
        id: 6,
        name: `Deducted Co-op`,
        disabled: false
      },
    ]
  }

  selectPPA(e) {
    console.log(e)
    if (e == "data") {
      this.listOfData = [
        {
          id: 1,
          name: `Volume Rebet`,
          disabled: false
        },
        {
          id: 2,
          name: `New Store`,
          disabled: false
        },
        {
          id: 3,
          name: `Deducted Co-op`,
          disabled: false
        },
        {
          id: 4,
          name: `Deducted Co-op`,
          disabled: false
        },
        {
          id: 5,
          name: `Placeholder`,
          disabled: false
        },
        {
          id: 6,
          name: `Deducted Co-op`,
          disabled: false
        },
      ]
    }
    else if (e == "claim") {
      this.listOfData = [
        {
          id: 1,
          name: `claim one`,
          disabled: false
        },
        {
          id: 2,
          name: `claim two`,
          disabled: false
        },
        {
          id: 3,
          name: `Placeholder`,
          disabled: false
        },
        {
          id: 4,
          name: `Deducted Co-op`,
          disabled: false
        },
      ]
    }
    else if (e == "reports") {
      this.listOfData = [
        {
          id: 1,
          name: `reports one`,
          disabled: false
        },
        {
          id: 2,
          name: `reports two`,
          disabled: false
        },
        {
          id: 3,
          name: `Placeholder`,
          disabled: false
        },
        {
          id: 4,
          name: `Deducted Co-op`,
          disabled: false
        },
      ]
    }
    else if (e == "audit") {
      this.listOfData = [
        {
          id: 1,
          name: `audit one`,
          disabled: false
        },
        {
          id: 2,
          name: `audit two`,
          disabled: false
        },
        {
          id: 3,
          name: `Placeholder`,
          disabled: false
        },
        {
          id: 4,
          name: `Deducted Co-op`,
          disabled: false
        },
      ]
    }
    
  }
}
